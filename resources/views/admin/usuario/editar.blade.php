@extends('admin.index')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Cadastro de Usuário</div>
                <div class="panel-body">
                    <div class="col-md-12">
                        <form action="{{route('editar.salvar.usuario',[$usuario->id])}}" method="POST" class="form-group" role="form">
                            @csrf
                            <input type="hidden" name="user_id" value="{{$usuario->id}}" />

                            <div class="form-group">
                                <label>Nome* </label>
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{$usuario->name}}" required autofocus>
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                <label>Email * </label>
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $usuario->email }}" required>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
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