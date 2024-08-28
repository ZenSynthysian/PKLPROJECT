<?php

use App\Http\Controllers\Api\PklController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\KadivController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route untuk mendapatkan informasi pengguna yang sudah login
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route untuk halaman utama (tanpa autentikasi)
Route::get('/', function () {
    return response()->json([
        'status' => false,
        'message' => 'akses tidak diperbolehkan'
    ], 401);
})->name('login');

// Rute yang dilindungi oleh Sanctum
Route::get('pkl', [PklController::class, 'index'])->middleware('auth:sanctum');

// Rute tanpa autentikasi untuk melihat detail PKL
Route::get('pkl/{nomor_pjk}', [PklController::class, 'show'])->middleware('auth:sanctum');

// Rute untuk operasi CRUD lainnya
Route::post('pkl', [PklController::class, 'store'])->middleware('auth:sanctum');
Route::put('pkl/{nomor_pjk}', [PklController::class, 'update'])->middleware('auth:sanctum');
Route::delete('pkl/{nomor_pjk}', [PklController::class, 'destroy'])->middleware('auth:sanctum');

// Rute untuk delete Selection
Route::post('pkl/bulk-delete', [PklController::class, 'bulkDelete'])
    ->middleware('auth:sanctum');

// Rute untuk autentikasi pengguna
Route::post('registeruser', [AuthController::class, 'registeruser']);
Route::post('loginuser', [AuthController::class, 'loginuser']);
Route::post('logoutuser', [AuthController::class, 'logoutuser'])->middleware('auth:sanctum');
Route::get('user', [AuthController::class, 'index'])->middleware('auth:sanctum');
Route::get('user/{id}', [AuthController::class, 'show'])->middleware('auth:sanctum');
Route::put('user/{id}', [AuthController::class, 'update'])->middleware('auth:sanctum');
Route::delete('user/{id}', [AuthController::class, 'destroy'])->middleware('auth:sanctum');

// data Pribadi
Route::get('datauser', [UserController::class, 'index'])->middleware('auth:sanctum');
Route::get('datauser/{id}', [UserController::class, 'show'])->middleware('auth:sanctum');
Route::post('datauser', [UserController::class, 'store'])->middleware('auth:sanctum');
Route::put('datauser/{id}', [UserController::class, 'update'])->middleware('auth:sanctum');
Route::delete('datauser/{id}', [UserController::class, 'destroy'])->middleware('auth:sanctum');

// kadiv
Route::get('kadivall', [KadivController::class, 'index']);
Route::get('kadiv/{id}', [KadivController::class, 'show']);
Route::post('kadiv', [KadivController::class, 'store']);
Route::put('kadiv/{id}', [KadivController::class, 'update']);
Route::delete('kadiv/{id}', [KadivController::class, 'destroy']);
