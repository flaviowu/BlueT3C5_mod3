import React, { useState } from 'react';

export default function Formulario(props) {

    const [ palavra, setPalavra ] = useState("")

    function handleFormSubmit(e) {
        e.preventDefault()
        props.onSubmit(palavra)
        setPalavra("")
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="digite algo" defaultValue={palavra} onChange={ (e) => setPalavra(e.target.value)}/>
            <button type="submit">TESTAR</button>
        </form>
    )


}