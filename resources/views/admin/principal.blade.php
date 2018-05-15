@extends('admin.index')
@section('content')

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Principal</h1>
        </div>
    </div><!--/.row-->

    <div class="row">
        <a href="{{route('novo.usuario')}}">
            <div class="col-xs-6 col-md-3">
                <div class="panel panel-default">
                    <div class="panel-body easypiechart-panel">
                        <h4>Cadastrar Usuário</h4>
                        <div class="easypiechart" id="easypiechart-blue" data-percent="100" ><span class="percent glyphicon glyphicon-pencil"></span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a href="{{route('nova.agenda')}}">
            <div class="col-xs-6 col-md-3">
                <div class="panel panel-default">
                    <div class="panel-body easypiechart-panel">
                        <h4>Nova Agenda</h4>
                        <div class="easypiechart" id="easypiechart-orange" data-percent="100" ><span class="percent glyphicon glyphicon-envelope"></span>
                        </div>
                    </div>
                </div>
            </div>
        </a>

    </div>

@endsection
