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
        $data = Pjk::orderBy('nomor_pjk')->paginate(30);

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
        $data = Pjk::where('nomor_pjk', 'LIKE', '%' . $nomor_pjk . '%')->paginate(30);
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

    public function showNomorPjk()
    {
        // Mengambil semua nomor_pjk dari model Pjk
        $allNomorPjk = Pjk::pluck('nomor_pjk');

        // Inisialisasi variabel untuk menyimpan nomor PJK terbaru
        $latestNomorPjk = null;

        foreach ($allNomorPjk as $nomorPjk) {
            // Memisahkan bagian nomor PJK
            preg_match('/^(.*?)-(.*?)-(\d{2})(\d{2})-(\d{5})$/', $nomorPjk, $matches);

            if ($matches) {
                // Mengatur nomor PJK terbaru berdasarkan tahun, bulan, dan urutan
                $currentNomorPjk = [
                    'kode' => $matches[1], // SC0000
                    'unitOrganisasi' => $matches[2], // NP
                    'tahun' => (int)$matches[3], // Tahun
                    'bulan' => (int)$matches[4], // Bulan
                    'urutan' => (int)$matches[5] + 1, // Urutan
                ];

                // Periksa apakah ini adalah yang terbaru
                if (
                    is_null($latestNomorPjk) ||
                    $this->isLatest($currentNomorPjk, $latestNomorPjk)
                ) {
                    $latestNomorPjk = $currentNomorPjk;
                }
            }
        }

        if ($latestNomorPjk) {
            return response()->json([
                'kode' => $latestNomorPjk['kode'],
                'unitOrganisasi' => $latestNomorPjk['unitOrganisasi'],
                'tahun' => $latestNomorPjk['tahun'],
                'bulan' => str_pad($latestNomorPjk['bulan'], 2, '0', STR_PAD_LEFT),
                'urutan' => str_pad($latestNomorPjk['urutan'], 5, '0', STR_PAD_LEFT),
            ], 200);
        }

        return response()->json([
            'status' => false,
            'message' => 'Data tidak ditemukan'
        ], 404);
    }

    // Fungsi untuk menentukan apakah nomor PJK saat ini lebih baru
    private function isLatest($current, $latest)
    {
        if ($latest === null) {
            return true; // Jika latest null, current otomatis dianggap lebih baru
        }

        if ($current['tahun'] > $latest['tahun']) {
            return true;
        } elseif ($current['tahun'] === $latest['tahun']) {
            if ($current['bulan'] > $latest['bulan']) {
                return true;
            } elseif ($current['bulan'] === $latest['bulan']) {
                return $current['urutan'] > $latest['urutan'];
            }
        }

        return false;
    }


    public function showfolder(string $folder)
    {
        $data = Pjk::where('folder', $folder)->paginate(30);

        if ($data->isNotEmpty()) {
            return response()->json([
                'status' => true,
                'message' => 'Data ditemukan',
                'data' => $data
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan'
            ], 404);
        }
    }

    public function showfolderpjk(string $folder, string $nomor_pjk)
    {
        $data = Pjk::where('folder', $folder)
            ->where('nomor_pjk', 'LIKE', '%' . $nomor_pjk . '%')
            ->paginate(30);

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
            ], 404);
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
