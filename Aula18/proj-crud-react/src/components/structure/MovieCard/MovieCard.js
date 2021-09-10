import React from 'react'
import "./MovieCard.scss"

export const MovieCard = (props) => {
    const movie = props.movie
    
    return (
        <div className="card">
            <img src={movie.urlPoster} alt="Foto"/>
            <h3>{movie.nome}</h3>
            <p>Sinopse</p>
            <p>{movie.sinopse}</p>
            <p>Duração: {movie.duracao} min</p>
        </div>
    )
}
