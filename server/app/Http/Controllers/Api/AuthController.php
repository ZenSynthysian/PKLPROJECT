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
    public function registeruser(Request $request)
    {
        $dataUser = new User();
        $rules = [
            'name' => 'required',
            'nik' => 'required',
            'password' => 'required',
            'role' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'proses validasi gagal',
                'data' => $validator->errors()
            ], 401);
        }

        $dataUser->name = $request->name;
        $dataUser->nik = $request->nik;
        $dataUser->password = Hash::make($request->password);
        $dataUser->role = $request->role;
        $dataUser->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses memasukan data'
        ], 200);
    }

    public function loginuser(Request $request)
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
            ], 401);
        }

        if (!Auth::attempt($request->only(['nik', 'password']))) {
            return response()->json([
                'status' => false,
                'message' => 'nik dan password tidak sesuai'
            ], 401);
        }

        $dataUser = User::where('nik', $request->nik)->first();
        $loginToken = $dataUser->createToken('api-pkl')->plainTextToken;
        return response()->json([
            'status' => true,
            'message' => 'berhasil proses login',
            'token' => $loginToken,
            'name' => $dataUser->name,
            'nik' => $dataUser->nik,
            'role' => $dataUser->role

        ]);
    }

    public function logoutuser(Request $request)

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

    public function index()
    {
        $data = User::orderBy('id')->get();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $data
        ], 200);
    }

    public function show(string $id)
    {
        $data = User::find($id);
        if ($data) {
            return response()->json([
                'status' => true,
                'message' => 'Data ditemukan',
                'data' => $data
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ]);
        }
    }

    public function update(Request $request, string $id)
    {
        $dataUser = User::find($id);
        if (empty($dataUser)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $rules = [
            'name' => 'required',
            'nik' => 'required',
            'role' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal update data',
                'data' => $validator->errors()
            ]);
        }

        $dataUser->name = $request->name;
        $dataUser->nik = $request->nik;
        $dataUser->role = $request->role;



        $post = $dataUser->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses update data'
        ]);
    }

    public function destroy(string $id)
    {
        $dataUser = User::find($id);
        if (empty($dataUser)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }



        $post = $dataUser->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses delete data'
        ]);
    }

}
