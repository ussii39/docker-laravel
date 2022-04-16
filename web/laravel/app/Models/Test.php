<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'address',
        'dept',
        'user_id',
        'employee_id',
    ];
 
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function employee()
    {
        return $this->belongsTo('App\Employee');
    }
}
