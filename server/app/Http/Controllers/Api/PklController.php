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
            //'kepada' => 'required',
            //'kode_anggaran' => 'required',
            //'wbs_cc' => 'required',
            //'refrensi' => 'required',
            //'no_permohonan_uang_muka' => 'required',
            //'jumlah_pencairan' => 'required',
            //'nama' => 'required',
            //'no_rekening' => 'required',
            //'nama_dan_alamat_bank' => 'required',
            //'unit_organisasi' => 'required',
            //'awal_pelaksanaan' => 'required',
            //'akhir_pelaksanaan' => 'required',
            //'jumlah_pengambilan' => 'required',
            //'jumlah_pjk' => 'required',
            //'jumlah_setor' => 'required',
            //'saldo' => 'required',
            //'pejabat_yang_berwenang' => 'required',
            //'tempat_tanggal_tanda_tangan' => 'required',
            //'nik' => 'required',
            //'nama_ttd' => 'required',
            //'catatan_kadiv' => 'required',
            //'nama_catatan_kadiv' => 'required',
            //'sn' => 'required',
            //'nomor_tanda_terima_uang' => 'required'
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
        $dataPkl->tempat_tanggal_tanda_tangan = $request->tempat_tanggal_tanda_tangan;
        $dataPkl->nik = $request->nik;
        $dataPkl->nama_ttd = $request->nama_ttd;
        $dataPkl->catatan_kadiv = $request->catatan_kadiv;
        $dataPkl->nama_catatan_kadiv = $request->nama_catatan_kadiv;
        $dataPkl->sn = $request->sn;
        $dataPkl->nomor_tanda_terima_uang = $request->nomor_tanda_terima_uang;
        $dataPkl->valuta = $request->valuta;


        $post = $dataPkl->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses memasukan data'
        ]);
    }

    /**
     * Display the specified resource.
     */

    public function show(string $nomor_pjk)
    {
        $data = Pkl::where('nomor_pjk', $nomor_pjk)->get();
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
    public function update(Request $request, string $nomor_pjk)
    {
        $dataPkl = Pkl::where('nomor_pjk', $nomor_pjk)->first();
        if (empty($dataPkl)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }

        $rules = [
            'nomor_pjk' => 'required',
            //'kepada' => 'required',
            //'kode_anggaran' => 'required',
            //'wbs_cc' => 'required',
            //'refrensi' => 'required',
            //'no_permohonan_uang_muka' => 'required',
            //'jumlah_pencairan' => 'required',
            //'nama' => 'required',
            //'no_rekening' => 'required',
            //'nama_dan_alamat_bank' => 'required',
            //'unit_organisasi' => 'required',
            //'awal_pelaksanaan' => 'required',
            //'akhir_pelaksanaan' => 'required',
            //'jumlah_pengambilan' => 'required',
            //'jumlah_pjk' => 'required',
            //'jumlah_setor' => 'required',
            //'saldo' => 'required',
            //'pejabat_yang_berwenang' => 'required',
            //'tempat_tanggal_tanda_tangan' => 'required',
            //'nik' => 'required',
            //'nama_ttd' => 'required',
            //'catatan_kadiv' => 'required',
            //'nama_catatan_kadiv' => 'required',
            //'sn' => 'required',
            //'nomor_tanda_terima_uang' => 'required'
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
        $dataPkl->tempat_tanggal_tanda_tangan = $request->tempat_tanggal_tanda_tangan;
        $dataPkl->nik = $request->nik;
        $dataPkl->nama_ttd = $request->nama_ttd;
        $dataPkl->catatan_kadiv = $request->catatan_kadiv;
        $dataPkl->nama_catatan_kadiv = $request->nama_catatan_kadiv;
        $dataPkl->sn = $request->sn;
        $dataPkl->nomor_tanda_terima_uang = $request->nomor_tanda_terima_uang;
        $dataPkl->valuta = $request->valuta;

        $post = $dataPkl->save();

        return response()->json([
            'status' => true,
            'message' => 'Sukses update data'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $nomor_pjk)
    {
        $dataPkl = Pkl::where('nomor_pjk', $nomor_pjk)->first();
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

    public function bulkDelete(Request $request)
    {
        // Validate the request
        $request->validate([
            'ids' => 'required|array', // Ensure 'ids' is an array
            'ids.*' => 'exists:pkl,nomor_pjk' // Ensure each ID exists in the table
        ]);

        // Fetch the IDs to be deleted
        $ids = $request->input('ids');

        // Attempt to delete the records
        try {
            $deletedCount = Pkl::whereIn('nomor_pjk', $ids)->delete();

            if ($deletedCount === 0) {
                return response()->json([
                    'status' => false,
                    'message' => 'No data found for deletion'
                ], 404);
            }

            return response()->json([
                'status' => true,
                'message' => 'Selected data has been permanently deleted'
            ], 200);
        } catch (\Exception $e) {
            // Log the exception message if needed
            return response()->json([
                'status' => false,
                'message' => 'Failed to delete selected data'
            ], 500);
        }
    }
}
