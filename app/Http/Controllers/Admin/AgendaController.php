<?php

namespace contatoagenda\Http\Controllers\Admin;

use contatoagenda\Models\Agenda;
use Illuminate\Http\Request;
use contatoagenda\Http\Controllers\Controller;

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

}
