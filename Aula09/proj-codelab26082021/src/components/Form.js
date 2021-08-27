import React from 'react';
import './Form.css'

export default function Form() {
    return(
        <div className='form-adm'>
            <form name='cad-adm' onSubmit=''>
                <input type='text' name='titulo' placeholder='Digite o Título do Jogo' />
                <input type='text' name='ano' placeholder='Digite o ano do Jogo' />
                <input type='text' name='img-url' placeholder='Digite a URL da imagem' />
                <button type='submit'>Adicionar Jogo</button>
            </form>
        </div>
    )
}