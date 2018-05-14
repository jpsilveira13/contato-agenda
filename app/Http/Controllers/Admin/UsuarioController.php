<?php

namespace contatoagenda\Http\Controllers\Admin;

use contatoagenda\Http\Requests\SalvarUsuarioRequest;
use contatoagenda\Http\Requests\UpdateUsuarioRequest;
use contatoagenda\Models\User;
use Illuminate\Http\Request;
use contatoagenda\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    private $usuario;

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

    public function salvarUsuario(SalvarUsuarioRequest $request){
        $getUsuario = $this->usuario->fill($request->all());
        $getUsuario->password = Hash::make($getUsuario->password);

        if($getUsuario->save()){
         $request->session()->flash('alert-success','Salvo com sucesso!');
         return redirect()->route('usuario');
        }else{
            $request->session()->flash('alert-error', 'Ops.. Houve um erro ao salvar!');
            return redirect()->back();
        }
    }

    public function editarUsuario($id){
        $usuario = $this->usuario->find($id);
        return view('admin.usuario.editar',compact('usuario'));
    }

    public function updateUsuario($id,UpdateUsuarioRequest $request){

        if($this->usuario->find($id)->update($request->all())){
            $request->session()->flash('alert-success', 'Salvo com sucesso!');
            return redirect()->route('usuario');
        } else {
            $request->session()->flash('alert-error', 'Ops.. Houve um erro ao salvar!');
            return redirect()->back();
        }

    }
    public function removerUsuario($id,Request $request){
        if ($this->usuario->find($id)->delete()) {
            $request->session()->flash('alert-success', 'Deletado com sucesso!');
            return redirect()->route('usuario');
        }
    }


}
