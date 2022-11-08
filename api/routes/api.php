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



Route::post('/register', [\App\Http\Controllers\Api\Auth\AuthController::class, 'store']);

Route::post('/login', [\App\Http\Controllers\Api\Auth\AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/logout', [\App\Http\Controllers\Api\Auth\AuthController::class, 'logout']);
    Route::prefix('users')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\Auth\AuthController::class, 'index']);
    });
});
