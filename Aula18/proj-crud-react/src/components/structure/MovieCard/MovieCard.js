import React from 'react'
import "./MovieCard.scss"

export const MovieCard = () => {
    return (
        <div className="card">
            <img src="http://picsum.photos/320/240" alt="Foto"/>
            <h3>Filme Sem Nome</h3>
            <p>Descrição</p>
        </div>
    )
}
