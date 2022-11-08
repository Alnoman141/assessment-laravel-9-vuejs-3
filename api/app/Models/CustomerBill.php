<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerBill extends Model
{
    use HasFactory;

    protected $guarded;

    protected $fillable = ['bill_month', 'bill_year', 'customer_id', 'user_id', 'amount', 'status'];

    public function customer(){
        return $this->belongsTo(Customer::class);
    }
}
