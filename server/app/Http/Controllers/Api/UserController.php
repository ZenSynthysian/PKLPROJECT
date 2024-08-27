<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Datauser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Datauser::orderBy('nama')->get();
        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $data
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataData = new Datauser;

        $rules = [
            'nama' => 'required',
            'no_rek' => 'required',
            'nama_alamat_bank' => 'required',
            'unit_organisasi' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal memasukan data',
                'data' => $validator->errors()
            ]);
        }

        $dataData->nama = $request->nama;
        $dataData->no_rek = $request->no_rek;
        $dataData->nama_alamat_bank = $request->nama_alamat_bank;
        $dataData->unit_organisasi = $request->unit_organisasi;


        $post = $dataData->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses memasukan data'
        ]);
    }

    /**
     * Display the specified resource.
     */

    public function show(string $id)
    {
        $data = Datauser::whereAny(['id', 'nama'], 'LIKE', '%' . $id . '%')->first();
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

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $dataData = Datauser::find($id);
        if (empty($dataData)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $rules = [
            'nama' => 'required',
            'no_rek' => 'required',
            'nama_alamat_bank' => 'required',
            'unit_organisasi' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal update data',
                'data' => $validator->errors()
            ]);
        }

        $dataData->nama = $request->nama;
        $dataData->no_rek = $request->no_rek;
        $dataData->nama_alamat_bank = $request->nama_alamat_bank;
        $dataData->unit_organisasi = $request->unit_organisasi;



        $post = $dataData->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses update data'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataData = Datauser::find($id);
        if (empty($dataData)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }



        $post = $dataData->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses delete data'
        ]);
    }
}
