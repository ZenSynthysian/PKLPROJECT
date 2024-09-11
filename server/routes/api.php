<?php

use App\Http\Controllers\Api\PjkController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\KadivController;
use App\Http\Controllers\Api\CurrenciesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\RoleMiddleware;

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
Route::get('pjk', [PjkController::class, 'index'])->middleware('auth:sanctum');

// Rute tanpa autentikasi untuk melihat detail PJK
Route::get('pjk/{nomor_pjk}', [PjkController::class, 'show'])->middleware('auth:sanctum');

// Rute untuk operasi CRUD lainnya
Route::post('pjk', [PjkController::class, 'store']);
Route::put('pjk/{nomor_pjk}', [PjkController::class, 'update'])->middleware('auth:sanctum');
Route::delete('pjk/{nomor_pjk}', [PjkController::class, 'destroy'])->middleware('auth:sanctum');

// Rute untuk delete Selection
Route::post('pjk/bulk-delete', [PjkController::class, 'bulkDelete'])->middleware('auth:sanctum');




// Rute untuk autentikasi pengguna

Route::post('loginuser', [AuthController::class, 'loginuser']);

Route::middleware(['auth:sanctum', RoleMiddleware::class . ':admin'])->group(function () {
    Route::post('registeruser', [AuthController::class, 'registeruser']);
    Route::post('logoutuser', [AuthController::class, 'logoutuser']);
    Route::get('user', [AuthController::class, 'index']);
    Route::get('user/{id}', [AuthController::class, 'show']);
    Route::put('user/{id}', [AuthController::class, 'update']);
    Route::delete('user/{id}', [AuthController::class, 'destroy']);
});

// data Pribadi
Route::middleware(['auth:sanctum', RoleMiddleware::class . ':admin'])->group(function () {
    Route::get('datauser', [UserController::class, 'index'])->middleware('auth:sanctum');
    Route::get('datauser/{id}', [UserController::class, 'show'])->middleware('auth:sanctum');
    Route::post('datauser', [UserController::class, 'store'])->middleware('auth:sanctum');
    Route::put('datauser/{id}', [UserController::class, 'update'])->middleware('auth:sanctum');
    Route::delete('datauser/{id}', [UserController::class, 'destroy'])->middleware('auth:sanctum');
});

// kadiv
Route::middleware(['auth:sanctum', RoleMiddleware::class . ':admin'])->group(function () {
    Route::get('kadivall', [KadivController::class, 'index'])->middleware('auth:sanctum');
    Route::get('kadiv/{id}', [KadivController::class, 'show'])->middleware('auth:sanctum');
    Route::post('kadiv', [KadivController::class, 'store'])->middleware('auth:sanctum');
    Route::put('kadiv/{id}', [KadivController::class, 'update'])->middleware('auth:sanctum');
    Route::delete('kadiv/{id}', [KadivController::class, 'destroy'])->middleware('auth:sanctum');
});

// Currencies
Route::middleware(['auth:sanctum', RoleMiddleware::class . ':admin'])->group(function () {
    Route::get('currencies/{code}/{code2?}/{code3?}/{code4?}', [CurrenciesController::class, 'show'])->middleware('auth:sanctum');
});
