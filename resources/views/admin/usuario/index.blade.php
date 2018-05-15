@extends('admin.index')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Usuários</h1>
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
                <div class="panel-heading">Listagem Usuários </div>
                <div class="panel-body">
                    <div class="pull-left"><a class="btn btn-lg btn-primary" href="{{route('novo.usuario')}}">Novo Usuário</a></div><br /><br /><br />
                    <div class="pull-left search"><input class="form-control" type="text" placeholder="Pesquisar"></div>
                    <br />
                    <br />
                    <table class="table table-bordered table-hover table-responsive striped table-str" data-toggle="table"  data-show-refresh="true" data-show-toggle="true" data-show-columns="true" data-search="true" data-select-item-name="toolbar1" data-pagination="true" data-sort-name="name" data-sort-order="desc">
                        <thead>
                        <tr>
                            <th data-field="id" data-checkbox="true" >ID</th>
                            <th data-field="Nome" data-sortable="true">Nome</th>
                            <th data-field="E-mail"  data-sortable="true">Email</th>
                            <th data-field="Data de Criação" data-sortable="true">Data Criação</th>
                            <th data-field="editar" data-sortable="true">Editar/Trocar Senha</th>
                            <th data-field="remover" data-sortable="true">Deletar</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($usuarios as $usuario)
                            <tr>
                                <td class="vertical-middle">{{$usuario->id}}</td>
                                <td class="vertical-middle" style="text-align: left">{{$usuario->name}}</td>
                                <td class="vertical-middle" style="text-align: left">{{$usuario->email}}</td>
                                <td class="vertical-middle">{{ date("d/m/Y H:i:s", strtotime($usuario->created_at)) }}</td>
                                <td class="vertical-middle">
                                    <a class="btn btn-primary btn-xs" href="{{route('editar.usuario',['id'=> $usuario->id])}}">
                                        <span class="glyphicon glyphicon-pencil"></span></a> | <a class="btn btn-warning btn-xs" href="{{route('alterar.senha.usuario',['id'=> $usuario->id])}}"><span class="glyphicon glyphicon-lock
"></span></a> </td>
                                <td class="vertical-middle"><a class="delete btn btn-danger btn-xs" href="{{route('remover.usuario',['id' => $usuario->id])}}"><span class="glyphicon glyphicon-trash"></span></a></td>
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
                {!! $usuarios->render() !!}
            </div>
        </div>
    </div>
@endsection