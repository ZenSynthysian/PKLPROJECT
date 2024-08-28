<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kadiv extends Model
{
    use HasFactory;

    protected $table = "kadiv";
    protected $fillable = [
        'divisi',
        'nama',
        'nik'
    ];
}