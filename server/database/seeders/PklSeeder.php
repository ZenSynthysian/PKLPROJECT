<?php

namespace Database\Seeders;

use App\Models\Pkl;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PklSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create('id_ID');
        for ($i = 0; $i < 5; $i++) {
        Pkl::create([
            'nomor_pjk' => $faker->sentence,
            'kepada' => $faker->name,
            'kode_anggaran' => $faker->date,
            'wbs_cc' => $faker->name,
            'refrensi' => $faker->name,
            'no_permohonan_uang_muka' => $faker->name,
            'jumlah_pencairan' => $faker->name,
            'nama' => $faker->name,
            'no_rekening' => $faker->name,
            'nama_dan_alamat_bank' => $faker->name,
            'unit_organisasi' => $faker->name,
            'awal_pelaksanaan' => $faker->name,
            'akhir_pelaksanaan' => $faker->name,
            'jumlah_pengambilan' => $faker->name,
            'jumlah_pjk' => $faker->name,
            'jumlah_setor' => $faker->name,
            'saldo' => $faker->name,
            'pejabat_yang_menjabat' => $faker->name,
           ]);
        }
    }
}
