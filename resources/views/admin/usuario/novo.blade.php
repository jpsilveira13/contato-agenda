@extends('admin.index')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">Cadastro de Notícias</div>
                <div class="panel-body">
                    <div class="col-md-12">
                        <form action="{{route('noticias.store')}}" method="POST" enctype="multipart/form-data" class="form-group" role="form">
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
                                    <small class="text-center"><b>Obs: Usar imagem com o formato 1080x408</b></small>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Titulo *</label>
                                <input type="text" name="titulo" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Descrição *</label>
                                <textarea name="descricao" class="form-control" rows="6"></textarea>
                            </div>

                            <div class="text-center">
                                <button class="btn btn-lg btn-primary center-block">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div><!-- /.col-->
    </div><!-- /.row -->

@endsection