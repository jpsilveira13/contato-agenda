<?php

namespace contatoagenda\Http\Controllers\Admin;

use contatoagenda\Models\User;
use Illuminate\Http\Request;
use contatoagenda\Http\Controllers\Controller;

class UsuarioController extends Controller
{

    public function __construct(User $usuario){
        $this->usuario = $usuario;
    }

    public function principal(){
        $usuarios = $this->usuario->orderBy('id','desc')->paginate(18);

        return view('admin.usuario.index',compact('usuarios'));
    }

    public function telaCriacao(){
        return view('admin.usuario.novo');
    }
}
