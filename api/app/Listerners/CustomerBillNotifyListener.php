<?php

namespace App\Listerners;

use App\Events\CustomerBillNotifyEvent;
use App\Mail\SendCustomerBillNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;


class CustomerBillNotifyListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\CustomerBillNotifyEvent  $event
     * @return void
     */
    public function handle(CustomerBillNotifyEvent $event)
    {
        $emali = $event->customer->email;
        Mail::to($emali)->send(new SendCustomerBillNotification($event->customer, $event->customerBill));
    }
}
