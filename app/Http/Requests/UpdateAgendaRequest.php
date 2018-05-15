<?php

namespace contatoagenda\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAgendaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'url_foto' => 'mimes:jpeg,bmp,png|max:1000',
            'email' => 'required|string|max:255|',
            'telefone' => 'required|string|max:255|exists:agenda',
            'data_nascimento' => 'required',

        ];
    }
}
