<?php

namespace contatoagenda\Models;

use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    protected  $table = 'agenda';

    protected $fillable = [
        'nome',
        'email',
        'telefone',
        'url_foto',
        'data_nascimento',
    ];
}
