<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Datauser extends Model
{
    use HasFactory;

    protected $table = "data_pribadi";
    protected $fillable = [
        'nama',
        'no_rek',
        'nama_alamat_bank',
        'unit_organisasi'
    ];
}
