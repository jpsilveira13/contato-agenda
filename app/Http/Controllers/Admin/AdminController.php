<?php

namespace contatoagenda\Http\Controllers\admin;

use Illuminate\Http\Request;
use contatoagenda\Http\Controllers\Controller;

class AdminController extends Controller
{


    public function principal(){
        return view('admin.principal');
    }
}
