<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pkl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PklController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Pkl::orderBy('pejabat_yang_berwenang')->get();
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
        $dataPkl = new Pkl;

        $rules = [
            'nomor_pjk' => 'required',
            'kepada' => 'required',
            'kode_anggaran' => 'required',
            'wbs_cc' => 'required',
            'refrensi' => 'required',
            'no_permohonan_uang_muka' => 'required',
            'jumlah_pencairan' => 'required',
            'nama' => 'required',
            'no_rekening' => 'required',
            'nama_dan_alamat_bank' => 'required',
            'unit_organisasi' => 'required',
            'awal_pelaksanaan' => 'required',
            'akhir_pelaksanaan' => 'required',
            'jumlah_pengambilan' => 'required',
            'jumlah_pjk' => 'required',
            'jumlah_setor' => 'required',
            'saldo' => 'required',
            'pejabat_yang_berwenang' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal memasukan data',
                'data' => $validator->errors()
            ]);
        }

        $dataPkl->nomor_pjk = $request->nomor_pjk;
        $dataPkl->kepada = $request->kepada;
        $dataPkl->kode_anggaran = $request->kode_anggaran;
        $dataPkl->wbs_cc = $request->wbs_cc;
        $dataPkl->refrensi = $request->refrensi;
        $dataPkl->no_permohonan_uang_muka = $request->no_permohonan_uang_muka;
        $dataPkl->jumlah_pencairan = $request->jumlah_pencairan;
        $dataPkl->nama = $request->nama;
        $dataPkl->no_rekening = $request->no_rekening;
        $dataPkl->nama_dan_alamat_bank = $request->nama_dan_alamat_bank;
        $dataPkl->unit_organisasi = $request->unit_organisasi;
        $dataPkl->awal_pelaksanaan = $request->awal_pelaksanaan;
        $dataPkl->akhir_pelaksanaan = $request->akhir_pelaksanaan;
        $dataPkl->jumlah_pengambilan = $request->jumlah_pengambilan;
        $dataPkl->jumlah_pjk = $request->jumlah_pjk;
        $dataPkl->jumlah_setor = $request->jumlah_setor;
        $dataPkl->saldo = $request->saldo;
        $dataPkl->pejabat_yang_berwenang = $request->pejabat_yang_berwenang;

        $post = $dataPkl->save();

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
        $data = Pkl::find($id);
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
        $dataPkl = Pkl::find($id);
        if (empty($dataPkl)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $rules = [
            'nomor_pjk' => 'required',
            'kepada' => 'required',
            'kode_anggaran' => 'required',
            'wbs_cc' => 'required',
            'refrensi' => 'required',
            'no_permohonan_uang_muka' => 'required',
            'jumlah_pencairan' => 'required',
            'nama' => 'required',
            'no_rekening' => 'required',
            'nama_dan_alamat_bank' => 'required',
            'unit_organisasi' => 'required',
            'awal_pelaksanaan' => 'required',
            'akhir_pelaksanaan' => 'required',
            'jumlah_pengambilan' => 'required',
            'jumlah_pjk' => 'required',
            'jumlah_setor' => 'required',
            'saldo' => 'required',
            'pejabat_yang_menjabat' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Gagal update data',
                'data' => $validator->errors()
            ]);
        }

        $dataPkl->nomor_pjk = $request->nomor_pjk;
        $dataPkl->kepada = $request->kepada;
        $dataPkl->kode_anggaran = $request->kode_anggaran;
        $dataPkl->wbs_cc = $request->judul;
        $dataPkl->refrensi = $request->refrensi;
        $dataPkl->no_permohonan_uang_muka = $request->no_permohonan_uang_muka;
        $dataPkl->jumlah_pencairan = $request->jumlah_pencairan;
        $dataPkl->nama = $request->nama;
        $dataPkl->no_rekening = $request->no_rekening;
        $dataPkl->nama_dan_alamat_bank = $request->nama_dan_alamat_bank;
        $dataPkl->unit_organisasi = $request->unit_organisasi;
        $dataPkl->awal_pelaksanaan = $request->awal_pelaksanaan;
        $dataPkl->akhir_pelaksanaan = $request->akhir_pelaksanaan;
        $dataPkl->jumlah_pengambilan = $request->jumlah_pengambilan;
        $dataPkl->jumlah_pjk = $request->jumlah_pjk;
        $dataPkl->jumlah_setor = $request->jumlah_setor;
        $dataPkl->saldo = $request->saldo;
        $dataPkl->pejabat_yang_menjabat = $request->pejabat_yang_menjabat;

        $post = $dataPkl->save();

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
        $dataPKl = Pkl::find($id);
        if (empty($dataPkl)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }



        $post = $dataPkl->delete();

        return response()->json([
            'status' => true,
            'message' => 'Sukses delete data'
        ]);
    }
}
