import React, { useState } from 'react';

export default function Formulario(props) {
    const [ novaPalavra, setNovaPalavra] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        props.setNovaPalavra(novaPalavra)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="digite algo" defaultValue={novaPalavra} onChange={ (e) => setNovaPalavra(e.target.value)}/>
            <button type="submit">TESTAR</button>
        </form>
    )


}