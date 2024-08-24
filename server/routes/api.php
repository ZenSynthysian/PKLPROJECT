<?php

use App\Http\Controllers\Api\PklController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/', function(){
    return response()->json([
        'status' => false,
        'message' => 'akses tidak diperbolehkan'
    ], 401);
})->name('login');


Route::get('pkl', [PklController::class, 'index'])->middleware('auth::sanctum');

Route::get('pkl/{nomor_pjk}', [PklController::class, 'show']);

Route::post('pkl', [PklController::class, 'store']);

Route::put('pkl/{nomor_pjk}', [PklController::class, 'update']);

Route::delete('pkl/{nomor_pjk}', [PklController::class, 'destroy']);

Route::post('registerUser', [AuthController::class, 'registerUser']);

Route::post('loginUser', [AuthController::class, 'loginUser']);
