<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pkl extends Model
{
    use HasFactory;

    protected $table = "pkl";
    protected $fillable = ['nomor_pjk', 'kepada' ,'kode_anggaran','wbs_cc','refrensi','no_permohonan_uang_muka',
    'jumlah_pencairan','nama','no_rekening','nama_dan_alamat_bank','unit_organisasi',
    'awal_pelaksanaan','akhir_pelaksanaan','jumlah_pengambilan','jumlah_pjk','jumlah_setor',
    'saldo','pejabat_yang_menjabat'];
}
