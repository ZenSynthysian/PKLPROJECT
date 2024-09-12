<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pkl', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_pjk');
            $table->string('kepada');
            $table->string('kode_anggaran');
            $table->string('wbs_cc');
            $table->string('refrensi');
            $table->string('no_permohonan_uang_muka');
            $table->integer('jumlah_pencairan');
            $table->string('nama');
            $table->string('no_rekening');
            $table->string('nama_dan_alamat_bank');
            $table->string('unit_organisasi');
            $table->date('awal_pelaksanaan');
            $table->date('akhir_pelaksanaan');
            $table->integer('jumlah_pengambilan');
            $table->integer('jumlah_pjk');
            $table->integer('jumlah_setor');
            $table->integer('saldo');
            $table->string('pejabat_yang_berwenang');
            $table->string('tempat_tanggal_tanda_tangan');
            $table->string('nik');
            $table->string('nama_ttd');
            $table->string('catatan_kadiv');
            $table->string('nama_catatan_kadiv');
            $table->string('sn');
            $table->string('nomor_tanda_terima_uang');
            $table->string('tempat');
            $table->string('valuta');
            $table->string('valuta2');
            $table->string('valuta3');
            $table->string('valuta4');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('');
    }
};
