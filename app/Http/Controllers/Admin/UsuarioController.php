<?php

namespace contatoagenda\Http\Controllers\Admin;

use contatoagenda\Http\Requests\SalvarUsuarioRequest;
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

    public function updateUsuario($id,Request $request){

        //validacao usuario
        $this->validate($request,array(
            'name' => 'required|string|max:255',
            'email' => "required|email|max:255|unique:users,email,$id",
        ));

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

    //funcao chamar view e alterar a senha

    public function alterarSenha($id){

        $usuario = $this->usuario->find($id);

        return view('admin.usuario.trocar_senha',compact('usuario'));
    }

    public function salvarSenha($id,Request $request){
        $this->validate($request, [
            'old' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = $this->usuario->find($id);

        $hashedPassword = $user->password;
        if (Hash::check($request->old, $hashedPassword)) {

            //Change the password
            $user->fill([
                'password' => Hash::make($request->password)
            ])->save();
            $request->session()->flash('alert-success', 'A senha do usuário foi redefinida com sucesso.');
            return redirect()->route('usuario');
        }else{

            $request->session()->flash('alert-error', 'Ops! Houve um erro ao alterar a sua senha. Tente novamente');
            return redirect()->back();
        }
    }


}
