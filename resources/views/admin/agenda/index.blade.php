@extends('admin.index')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Agendas Cadastradas</h1>
        </div>
    </div><!--/.row-->
    <div class="row">
        <div class="col-md-12">
            @if(Session::has('alert-success'))
                <div class="alert alert-success"><span class="glyphicon glyphicon-ok"></span><em> {!! session('alert-success') !!}</em></div>
            @elseif(Session::has('alert-success-delete'))
                <div class="alert alert-success"><span class="glyphicon glyphicon-ok"></span><em> {!! session('alert-success-delete') !!}</em></div>
            @endif
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Listagem Agendas </div>
                <div class="panel-body">
                    <div class="pull-left"><a class="btn btn-lg btn-primary" href="{{route('nova.agenda')}}">Nova agenda</a></div><br /><br /><br />
                    <div class="pull-left search"><input class="form-control" type="text" placeholder="Pesquisar"></div>
                    <br />
                    <br />
                    <table class="table table-bordered table-hover table-responsive striped table-str" data-toggle="table"  data-show-refresh="true" data-show-toggle="true" data-show-columns="true" data-search="true" data-select-item-name="toolbar1" data-pagination="true" data-sort-name="name" data-sort-order="desc">
                        <thead>
                        <tr>
                            <th data-field="state" data-checkbox="true" >ID</th>
                            <th data-field="Imagem" data-sortable="true">Imagem</th>
                            <th data-field="Nome"  data-sortable="true">Nome</th>
                            <th data-field="E-mail"  data-sortable="true">Email</th>
                            <th data-field="Telefone"  data-sortable="true">Telefone</th>
                            <th data-field="Data de nascimento" data-sortable="true">Data Nascimento</th>
                            <th data-field="Editar" data-sortable="true">Editar</th>
                            <th data-field="Deletar" data-sortable="true">Deletar</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($agendas as $agenda)
                            <tr>
                                <td class="vertical-middle">{{$agenda->id}}</td>
                                <td class="vertical-middle" data-title="Mapa">
                                    <img class="group list-group-image content-img-sugestao lazy transition-img" src="https://maps.googleapis.com/maps/api/staticmap?sensor=false&amp;center=-19.699780099999998,-47.96321880000001&amp;zoom=14&amp;size=300x400&amp;markers=color:blue|label:S|-19.699780099999998,-47.96321880000001&amp;key=AIzaSyDxQZuypz7a_tl3H_AfEIICPl0CQdqqHHg" width="80" height="80" alt="titulo imagem">
                                </td>
                                <td class="vertical-middle" style="text-align: left">{{$agenda->nome}}</td>
                                <td class="vertical-middle" style="text-align: left">{{$agenda->email}}</td>
                                <td class="vertical-middle" style="text-align: left">{{$agenda->telefone}}</td>
                                <td class="vertical-middle">{{ date("d/m/Y H:i:s", strtotime($agenda->data_nascimento)) }}</td>
                                <td class="vertical-middle"><a class="btn btn-primary btn-xs" href="{{route('editar.agenda',['id'=> $agenda->id])}}"><span class="glyphicon glyphicon-pencil"></span></a></td>
                                <td class="vertical-middle"><a class="delete btn btn-danger btn-xs" href="{{route('remover.agenda',['id' => $agenda->id])}}"><span class="glyphicon glyphicon-trash"></span></a></td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div><!--/.row-->
    <div class="row">
        <div class="col-md-12">
            <div class="text-center">
                {!! $agendas->render() !!}
            </div>
        </div>
    </div>
@endsection