@extends('admin.index')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Alterar senha do Usuário {{$usuario->nome}}</div>
                <div class="row">
                    <div class="col-md-12">
                        @if(Session::has('alert-error'))
                            <div class="alert alert-danger"><span class="glyphicon glyphicon-remove"></span><em> {!! session('alert-error') !!}</em></div>
                        @endif
                    </div>
                </div>
                <div class="panel-body">
                    <div class="col-md-12">
                        <form action="{{route('salvar.senha.usuario',[$usuario->id])}}" method="POST" class="form-group" role="form">
                            @csrf

                            <div class="form-group{{ $errors->has('old') ? ' has-error' : '' }}">
                                <label>Senha Antiga</label>
                                <input id="password" type="password" class="form-control obrigatorio" name="old">
                                @if ($errors->has('old'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('old') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label>Nova Senha</label>
                                <input id="password" type="password" class="form-control obrigatorio" name="password">
                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                                <label>Confirmação de senha* </label>
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-lg btn-primary center-block">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div><!-- /.col-->
    </div><!-- /.row -->

@endsection