<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema Agenda</title>

    <link href="{{asset('admin/dist/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('admin/dist/css/datepicker3.css')}}" rel="stylesheet">
    <link href="{{asset('admin/css/admin.css')}}" rel="stylesheet">

    <!--Icons-->
    <script src="{{asset('admin/dist/js/lumino.glyphs.js')}}"></script>

    <!--[if lt IE 9]>
    <script src="{{asset('admin/dist/js/html5shiv.js')}}"></script>
    <script src="{{asset('admin/dist/js/respond.min.js')}}"></script>
    <![endif]-->

</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{'/admin/home'}}">Sistema Agenda</a>
            <ul class="user-menu">
                <li class="dropdown pull-right">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><svg class="glyph stroked male-user"><use xlink:href="#stroked-male-user"></use></svg> Olá, {{ auth()->user()->name}} <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">

                        <li><a href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();"><svg class="glyph stroked cancel"><use xlink:href="#stroked-cancel"></use></svg> Sair</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </div><!-- /.container-fluid -->
</nav>

<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
    <form role="search">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Procurar">
        </div>
    </form>
    <ul class="nav menu">
        <li class="active"><a href="{{url('/admin/home')}}"><svg class="glyph stroked dashboard-dial"><use xlink:href="#stroked-dashboard-dial"></use></svg> Informações</a></li>


            <li class="parent"><a href="{{route('usuario')}}"><svg class="glyph stroked male user "><use xlink:href="#stroked-male-user"/></svg>
                    Usuários</a></li>
            <li class="parent"><a href="{{route('agenda')}}"><svg class="glyph stroked email"><use xlink:href="#stroked-email"/></svg>
                    Agendas</a></li>

    </ul>
</div><!--/.sidebar-->

<div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
    <div class="row">
        <div class="alert alert-info alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <i class="fa fa-info-circle"></i><strong>Seja bem vindo, </strong> {{auth()->user()->name}}  </div>
    </div><!--/.row-->
    @yield('content')
</div>	<!--/.main-->

<script src="{{asset('admin/dist/js/jquery-1.11.1.min.js')}}"></script>
<script src="{{asset('admin/dist/js/bootstrap.min.js')}}"></script>
<script src="https://use.fontawesome.com/9a93b47e91.js"></script>


<script src="{{asset('admin/dist/js/bootstrap-datepicker.js')}}"></script>
@yield('js-mascara')
<script src="{{asset('admin/js/admin.js')}}"></script>

</body>

</html>