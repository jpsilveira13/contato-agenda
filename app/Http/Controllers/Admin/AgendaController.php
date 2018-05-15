<?php

namespace contatoagenda\Http\Controllers\Admin;

use contatoagenda\Http\Requests\SalvarAgendaRequest;
use contatoagenda\Http\Requests\UpdateAgendaRequest;
use contatoagenda\Models\Agenda;

use Illuminate\Http\Request;
use contatoagenda\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;
class AgendaController extends Controller
{

    private $agenda;

    public function __construct(Agenda $agenda){
        $this->agenda = $agenda;
    }

    public function principal(){
        $agendas = $this->agenda->orderBy('id','desc')->paginate(18);

        return view('admin.agenda.index',compact('agendas'));
    }


    public function telaCriacao(){
        return view('admin.agenda.novo');
    }

    public function salvarAgenda(SalvarAgendaRequest $request){

        $agenda = $this->agenda->fill($request->all());
        $agenda->data_nascimento = \DateTime::createFromFormat('d/m/Y', $agenda->data_nascimento)->format('Y-m-d');
        $imagem = $request->file('arquivo');

        $agenda->url_foto = md5(date('Ymdhms').$imagem->getClientOriginalName()).'.'.$imagem->getClientOriginalExtension();
        $path = public_path().'/admin/imagens/'.$agenda->url_foto;
        Image::make($imagem->getRealPath())->resize(160,160)->save($path);
        if($agenda->save()){
            $request->session()->flash('alert-success','Agenda cadastrada com sucesso!');
            return redirect()->route('agenda');
        }

    }
    public function editarAgenda($id){
        $agenda = $this->agenda->find($id);
        return view('admin.agenda.editar',compact('agenda'));
    }


    public function updateAgenda(UpdateAgendaRequest $request,$id){
        $agenda = $this->agenda->fill($request->all());

        $agendaBanco = $this->agenda->find($id);


        if(!empty($request->file('arquivo'))){

            if(file_exists(public_path().'/admin/imagens/'.$agendaBanco->url_foto)){

                File::delete(public_path().'/admin/imagens/'.$agendaBanco->url_foto);

            }
            $imagem = $request->file('arquivo');

            $agenda->url_foto = md5(date('Ymdhms').$imagem->getClientOriginalName()).'.'.$imagem->getClientOriginalExtension();
            $path = public_path().'/admin/imagens/'.$agenda->url_foto;
            Image::make($imagem->getRealPath())->resize(160,160)->save($path);

        }
        $agenda->data_nascimento = \DateTime::createFromFormat('d/m/Y', $agenda->data_nascimento)->format('Y-m-d');
        $agenda = $agenda->toArray();
        dd($agendaBanco->update($agenda));



    }



    public function removerAgenda(Request $request,$id){
        $agenda = $this->agenda->find($id);

        if($agenda->url_foto){

            if(file_exists(public_path().'/admin/imagens/'.$agenda->url_foto)){

                File::delete(public_path().'/admin/imagens/'.$agenda->url_foto);

            }
        }

        $agenda->delete();
        $request->session()->flash('alert-success','Agenda deletada com sucesso!');
        return redirect()->route('agenda');


    }

}
