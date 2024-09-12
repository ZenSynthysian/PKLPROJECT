<?php

namespace Database\Seeders;

use App\Models\Pjk;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PjkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');
        for ($i = 0; $i < 40; $i++) {
        Pjk::create([
            'nomor_pjk' => $faker->name,
            'kepada' => $faker->name,
            'kode_anggaran' => $faker->name,
            'wbs_cc' => $faker->name,
            'refrensi' => $faker->name,
            'no_permohonan_uang_muka' => $faker->name,
            'jumlah_pencairan' => $faker->numberBetween(1, 100),
            'nama' => $faker->name,
            'no_rekening' => $faker->name,
            'nama_dan_alamat_bank' => $faker->name,
            'unit_organisasi' => $faker->name,
            'awal_pelaksanaan' => $faker->date,
            'akhir_pelaksanaan' => $faker->date,
            'jumlah_pengambilan' => $faker->numberBetween(1, 100),
            'jumlah_pjk' => $faker->numberBetween(1, 100),
            'jumlah_setor' => $faker->numberBetween(1, 100),
            'saldo' => $faker->numberBetween(1, 100),
            'pejabat_yang_berwenang' => $faker->name,
            'tempat_tanggal_tanda_tangan' => $faker->name,
            'nik' => $faker->name,
            'nama_ttd' => $faker->name,
            'catatan_kadiv' => $faker->name,
            'sn' => $faker->name,
            'nomor_tanda_terima_uang' => $faker->name,
            'tempat' => $faker->name,
            'valuta' => $faker->name,
            'valuta2' => $faker->name,
            'valuta3' => $faker->name,
            'valuta4' => $faker->name,
           ]);
        }
    }
}
