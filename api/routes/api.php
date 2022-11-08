<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// user registration
Route::post('/register', [\App\Http\Controllers\Api\Auth\AuthController::class, 'store']);

// user login
Route::post('/login', [\App\Http\Controllers\Api\Auth\AuthController::class, 'login']);

// customer login
Route::post('/customer/login', [\App\Http\Controllers\Api\CustomerController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    // user logout
    Route::post('/logout', [\App\Http\Controllers\Api\Auth\AuthController::class, 'logout']);
    // user routes
    Route::prefix('users')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\Auth\AuthController::class, 'index']);
    });
    // customer routes
    Route::prefix('customers')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\CustomerController::class, 'index']);
        Route::post('/', [\App\Http\Controllers\Api\CustomerController::class, 'store']);
        Route::put('/{id}', [\App\Http\Controllers\Api\CustomerController::class, 'update']);
    });

    // customer bill routes
    Route::prefix('customer-bills')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\CustomerBillController::class, 'index']);
        Route::post('/', [\App\Http\Controllers\Api\CustomerBillController::class, 'store']);
        Route::put('/{id}', [\App\Http\Controllers\Api\CustomerBillController::class, 'update']);
    });
});

// customer auth routes
Route::group(['middleware' => 'auth:customer'], function () {
    Route::post('/customer/logout', [\App\Http\Controllers\Api\CustomerController::class, 'logout']);
    
    Route::get('/auth-customer/bills', [\App\Http\Controllers\Api\CustomerBillController::class, 'getBills']);
});
