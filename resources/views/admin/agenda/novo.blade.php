@extends('admin.index')
@section('js-mascara')

    <script src="{{asset('admin/dist/js/jquery.mask.js')}}"></script>
    <script src="{{asset('admin/js/mascara-ativas.js')}}"></script>
@endsection
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Cadastro de Agenda</div>
                <div class="panel-body">
                    <div class="col-md-12">
                        <form action="{{ route('post.agenda') }}" method="POST" enctype="multipart/form-data" class="form-group" role="form">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">

                            <div class="form-group">
                                <div class="file-upload">
                                    <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Adicionar Imagem</button>

                                    <div class="image-upload-wrap">
                                        <input class="file-upload-input" type='file' name="arquivo" onchange="readURL(this);" accept="image/*" />
                                        <div class="drag-text">
                                            <h3>
                                                Arraste e solte um arquivo ou seleccione a imagem</h3>
                                        </div>
                                    </div>
                                    <div class="file-upload-content">
                                        <img class="file-upload-image" src="#" alt="sua imagem" />
                                        <div class="image-title-wrap">
                                            <button type="button" onclick="removeUpload()" class="remove-image">Remover <span class="image-title">Imagem cadastrada</span></button>
                                        </div>
                                    </div>
                                    <br />
                                    <small class="text-center"><b>Obs: Usar imagem com o tamanho 160x160. Formatos que suportam são: JPG e PNG.</b></small>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Nome* </label>
                                <input id="name" type="text" class="form-control{{ $errors->has('nome') ? ' is-invalid' : '' }}" name="nome" value="{{ old('nome') }}" required autofocus>
                                @if ($errors->has('nome'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('nome') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                <label>Email * </label>
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                <label>Telefone * </label>
                                <input id="email" type="email" class="form-control{{ $errors->has('telefone') ? ' is-invalid' : '' }}" name="telefone" value="{{ old('telefone') }}" required>
                                @if ($errors->has('telefone'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('telefone') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-group">
                                <label>Data de Nascimento *</label>
                                <input type="text" name="data_nascimento" class="form-control{{ $errors->has('telefone') ? ' is-invalid' : '' }} dataNascimento" required value="{{ old('data_nascimento') }}">
                                @if ($errors->has('data_nascimento'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('data_nascimento') }}</strong>
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