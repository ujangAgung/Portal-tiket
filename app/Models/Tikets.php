<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tikets extends Model
{
    protected $table = 'tikets';
    protected $guarded = ['id'];
    use HasFactory;
}
