<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pjk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PjkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil data dengan pagination 30 item per halaman
        $data = Pjk::paginate(30);
    
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
        $dataPjk = new Pjk;

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
        
        $dataPjk->folder = $request->folder;
        $dataPjk->nomor_pjk = $request->nomor_pjk;
        $dataPjk->kepada = $request->kepada;
        $dataPjk->kode_anggaran = $request->kode_anggaran;
        $dataPjk->wbs_cc = $request->wbs_cc;
        $dataPjk->refrensi = $request->refrensi;
        $dataPjk->no_permohonan_uang_muka = $request->no_permohonan_uang_muka;
        $dataPjk->jumlah_pencairan = $request->jumlah_pencairan;
        $dataPjk->nama = $request->nama;
        $dataPjk->no_rekening = $request->no_rekening;
        $dataPjk->nama_dan_alamat_bank = $request->nama_dan_alamat_bank;
        $dataPjk->unit_organisasi = $request->unit_organisasi;
        $dataPjk->awal_pelaksanaan = $request->awal_pelaksanaan;
        $dataPjk->akhir_pelaksanaan = $request->akhir_pelaksanaan;
        $dataPjk->jumlah_pengambilan = $request->jumlah_pengambilan;
        $dataPjk->jumlah_pjk = $request->jumlah_pjk;
        $dataPjk->jumlah_setor = $request->jumlah_setor;
        $dataPjk->saldo = $request->saldo;
        $dataPjk->pejabat_yang_berwenang = $request->pejabat_yang_berwenang;
        $dataPjk->tempat_tanggal_tanda_tangan = $request->tempat_tanggal_tanda_tangan;
        $dataPjk->nik = $request->nik;
        $dataPjk->nama_ttd = $request->nama_ttd;
        $dataPjk->catatan_kadiv = $request->catatan_kadiv;
        $dataPjk->nama_catatan_kadiv = $request->nama_catatan_kadiv;
        $dataPjk->sn = $request->sn;
        $dataPjk->nomor_tanda_terima_uang = $request->nomor_tanda_terima_uang;
        $dataPjk->tempat = $request->tempat;
        $dataPjk->valuta = $request->valuta;
        $dataPjk->valuta2 = $request->valuta2;
        $dataPjk->valuta3 = $request->valuta3;
        $dataPjk->valuta4 = $request->valuta4;
        $dataPjk->folder = $request->folder;


        $post = $dataPjk->save();

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
        $data = Pjk::where('nomor_pjk', $nomor_pjk)->get();
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

    public function showfolder(string $folder)
    {
        $data = Pjk::where('folder', $folder)->get();
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
        $dataPjk = Pjk::where('nomor_pjk', $nomor_pjk)->first();
        if (empty($dataPjk)) {
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

        $dataPjk->folder = $request->folder;
        $dataPjk->nomor_pjk = $request->nomor_pjk;
        $dataPjk->kepada = $request->kepada;
        $dataPjk->kode_anggaran = $request->kode_anggaran;
        $dataPjk->wbs_cc = $request->wbs_cc;
        $dataPjk->refrensi = $request->refrensi;
        $dataPjk->no_permohonan_uang_muka = $request->no_permohonan_uang_muka;
        $dataPjk->jumlah_pencairan = $request->jumlah_pencairan;
        $dataPjk->nama = $request->nama;
        $dataPjk->no_rekening = $request->no_rekening;
        $dataPjk->nama_dan_alamat_bank = $request->nama_dan_alamat_bank;
        $dataPjk->unit_organisasi = $request->unit_organisasi;
        $dataPjk->awal_pelaksanaan = $request->awal_pelaksanaan;
        $dataPjk->akhir_pelaksanaan = $request->akhir_pelaksanaan;
        $dataPjk->jumlah_pengambilan = $request->jumlah_pengambilan;
        $dataPjk->jumlah_pjk = $request->jumlah_pjk;
        $dataPjk->jumlah_setor = $request->jumlah_setor;
        $dataPjk->saldo = $request->saldo;
        $dataPjk->pejabat_yang_berwenang = $request->pejabat_yang_berwenang;
        $dataPjk->tempat_tanggal_tanda_tangan = $request->tempat_tanggal_tanda_tangan;
        $dataPjk->nik = $request->nik;
        $dataPjk->nama_ttd = $request->nama_ttd;
        $dataPjk->catatan_kadiv = $request->catatan_kadiv;
        $dataPjk->nama_catatan_kadiv = $request->nama_catatan_kadiv;
        $dataPjk->sn = $request->sn;
        $dataPjk->nomor_tanda_terima_uang = $request->nomor_tanda_terima_uang;
        $dataPjk->tempat = $request->tempat;
        $dataPjk->valuta = $request->valuta;
        $dataPjk->valuta2 = $request->valuta2;
        $dataPjk->valuta3 = $request->valuta3;
        $dataPjk->valuta4 = $request->valuta4;
        $dataPjk->folder = $request->folder;


        $post = $dataPjk->save();

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
        $dataPjk = Pjk::where('nomor_pjk', $nomor_pjk)->first();
        if (empty($dataPjk)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }



        $post = $dataPjk->delete();

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
            'ids.*' => 'exists:pjk,nomor_pjk' // Ensure each ID exists in the table
        ]);

        // Fetch the IDs to be deleted
        $ids = $request->input('ids');

        // Attempt to delete the records
        try {
            $deletedCount = Pjk::whereIn('nomor_pjk', $ids)->delete();

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
