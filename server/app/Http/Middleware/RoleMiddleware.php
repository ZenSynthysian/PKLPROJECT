<?php

namespace App\Http\Middleware;

use Closure; // Digunakan untuk mengelola closure pada middleware
use Illuminate\Http\Request; // Mengimpor kelas Request untuk menangani HTTP request
use Illuminate\Support\Facades\Auth; // Mengimpor fasad Auth untuk memeriksa autentikasi pengguna

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Mengecek apakah pengguna telah terautentikasi dan memiliki role yang sesuai
        if (Auth::check() && Auth::user()->role == $role) {
            return $next($request); // Melanjutkan request jika kondisi terpenuhi
        }

        // Mengembalikan respons 403 jika pengguna tidak memiliki role yang sesuai
        return response()->json(['message' => 'Unauthorized'], 403);
    }
}