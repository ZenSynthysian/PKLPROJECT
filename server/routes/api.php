<?php

use App\Http\Controllers\Api\PklController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route untuk mendapatkan informasi pengguna yang sudah login
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route untuk halaman utama (tanpa autentikasi)
Route::get('/', function(){
    return response()->json([
        'status' => false,
        'message' => 'akses tidak diperbolehkan'
    ], 401);
})->name('login');

// Rute yang dilindungi oleh Sanctum
Route::get('pkl', [PklController::class, 'index'])->middleware('auth:sanctum');

// Rute tanpa autentikasi untuk melihat detail PKL
Route::get('pkl/{nomor_pjk}', [PklController::class, 'show']);

// Rute untuk operasi CRUD lainnya
Route::post('pkl', [PklController::class, 'store'])->middleware('auth:sanctum');
Route::put('pkl/{nomor_pjk}', [PklController::class, 'update'])->middleware('auth:sanctum');
Route::delete('pkl/{nomor_pjk}', [PklController::class, 'destroy'])->middleware('auth:sanctum');

// Rute untuk autentikasi pengguna
Route::post('registerUser', [AuthController::class, 'registerUser']);
Route::post('loginUser', [AuthController::class, 'loginUser']);
Route::post('logoutUser', [AuthController::class, 'logoutUser'])->middleware('auth:sanctum');