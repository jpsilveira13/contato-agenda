<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//rotas do login, cadastro e trocar senha.
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


//criacão das rotas admin


Route::group(['middleware' => 'auth', 'where' => ['id' => '[0-9]+']], function () {
    Route::group(['prefix' => 'sistema'], function () {
        Route::get('/', [
            'as' => 'sistema',
            'uses' => 'Admin\AdminController@principal'
        ]);


        Route::group(['prefix' => 'agenda'], function () {
            Route::get('/', [
                'as' => 'agenda',
                'uses' => 'Admin\AgendaController@principal'
            ]);
            Route::name('nova.agenda')->get('novo','Admin\AgendaController@telaCriacao');
            Route::name('post.agenda')->post('salvar-agenda','Admin\AgendaController@salvarAgenda');

            Route::name('editar.agenda')->get('editar-agenda/{id}','Admin\AgendaController@editarAgenda');
            Route::name('editar.salvar.agenda')->post('editar-salvar-agenda/{id}','Admin\AgendaController@updateAgenda');
            Route::name('remover.agenda')->get('remover-usuario/{id}','Admin\AgendaController@removerAgenda');

        });

        Route::group(['prefix' => 'usuario'], function () {
            Route::get('/', [
                'as' => 'usuario',
                'uses' => 'Admin\UsuarioController@principal'
            ]);

            Route::name('novo.usuario')->get('novo','Admin\UsuarioController@telaCriacao');
            Route::name('post.usuario')->post('salvar-usuario','Admin\UsuarioController@salvarUsuario');

            Route::name('editar.usuario')->get('editar-usuario/{id}','Admin\UsuarioController@editarUsuario');
            Route::name('editar.salvar.usuario')->post('editar-salvar-usuario/{id}','Admin\UsuarioController@updateUsuario');
            Route::name('remover.usuario')->get('remover-usuario/{id}','Admin\UsuarioController@removerUsuario');
            //rotas de alteração de senha
            Route::name('alterar.senha.usuario')->get('alterar-senha/{id}','Admin\UsuarioController@alterarSenha');
            Route::name('salvar.senha.usuario')->post('salvar-senha/{id}','Admin\UsuarioController@salvarSenha');
        });

    });





});

