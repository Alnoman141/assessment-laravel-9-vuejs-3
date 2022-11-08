<?php

namespace App\Http\Controllers\Api;

use App\Events\CustomerBillNotifyEvent;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\CustomerBill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CustomerBillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bills = CustomerBill::with('customer')->get();
        return response()->json(['bills' => $bills], 200);
    }

    // get auth customer bills
    public function getBills(){
        $bills = CustomerBill::where('customer_id', auth()->guard('customer')->user()->id)->with('customer')->get();
        return response()->json(['bills' => $bills], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            array_merge($this->getValidationRules($customer = null, $isNew = false))
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $customerBill = new CustomerBill();
            $this->saveData($request, $customerBill);
            try {
                $customerBill->save();
                $customer = Customer::find($request->customer_id);
                event(new CustomerBillNotifyEvent($customer, $customerBill));
                return response()->json(['success' => 'customer bill generated successful', 'user' => $customer], 200);
            } catch (\Exception $ex) {
                return response()->json(['error' => $ex->getMessage()], 403);
            }
        }
    }

    // save customer bill data
    public function saveData($request, $customerBill){
        $customerBill->customer_id = $request->customer_id;
        $customerBill->user_id = Auth::id();
        $customerBill->amount = $request->amount;
        $customerBill->bill_month = $request->bill_month;
        $customerBill->bill_year = $request->bill_year;
        $customerBill->status = $request->status;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CustomerBill  $customerBill
     * @return \Illuminate\Http\Response
     */
    public function show(CustomerBill $customerBill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CustomerBill  $customerBill
     * @return \Illuminate\Http\Response
     */
    public function edit(CustomerBill $customerBill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CustomerBill  $customerBill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CustomerBill $customerBill)
    {
        $bill = CustomerBill::find($request->id);
        if(isset($bill)){
            $this->saveData($request, $bill);
            $bill->save();
            return response()->json(['success' => 'customer bill updated successful', 'user' => $customerBill], 200);
        } else {
            return response()->json(['error' => 'Requested bill not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CustomerBill  $customerBill
     * @return \Illuminate\Http\Response
     */
    public function destroy(CustomerBill $customerBill)
    {
        //
    }

    // getValidationRules is used for validate all request
    private function getValidationRules($customer, $isNew)
    {
        return [
            'customer_id' => 'required|numeric',
            'bill_month' => 'required|string',
            'bill_year' => 'required|string',
            'amount' => 'required',
        ];
    }
}
