<?php

use App\Http\Controllers\Api\PklController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Rute untuk metode 'index'
Route::get('pkl', [PklController::class, 'index']);

Route::get('pkl/{nomor_pjk}', [PklController::class, 'show']);

Route::post('pkl', [PklController::class, 'store']);

Route::put('pkl/{id}', [PklController::class, 'update']);

Route::delete('pkl/{id}', [PklController::class, 'destroy']);