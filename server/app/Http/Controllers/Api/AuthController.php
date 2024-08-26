<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function registerUser(Request $request){
        $dataUser = new User();
        $rules = [
            'name' => 'required',
            'nik' => 'required',
            'password' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'proses validasi gagal',
                'data' => $validator->errors()
            ],401);
        }

        $dataUser->name = $request->name;
        $dataUser->nik = $request->nik;
        $dataUser->password = Hash::make($request->password);
        $dataUser->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses memasukan data'
        ], 200);
    }

    public function loginUser(Request $request)
    {
        $dataUser = new User();
        $rules = [
            'nik' => 'required',
            'password' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'proses login gagal',
                'data' => $validator->errors()
            ],401);
        }
  
        if(!Auth::attempt($request->only(['nik', 'password']))){
            return response()->json([
                'status' => false,
                'message' => 'nik dan password tidak sesuai'
            ], 401);
        }

        $dataUser = User::where('nik', $request->nik)->first();
        $loginToken = $dataUser->createToken('api-pkl')->plainTextToken;
        session(['token' => $loginToken]);

        return response()->json([
            'status' => true,
            'message' => 'berhasil proses login',
            'token' => session('token')
        ]);
    }

    public function logoutUser(Request $request)
    
    {
        // mastiin pengguna terautentikasi
        if (!$request->user()) {
            return response()->json([
                'status' => false,
                'message' => 'Pengguna tidak terautentikasi'
            ], 401);
        }
        
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses log out'
        ]);
    }
}