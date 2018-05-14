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

        });

    });





});

