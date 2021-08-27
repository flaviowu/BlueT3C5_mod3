import React from 'react'
import './Cards.css'

export default function Card(props) {
    return (
        <div className='card'>
            <h3>{props.titulo}</h3>
            <p>{props.ano}</p>
            <img src={props.imgUrl} alt={props.titulo}/>
        </div>
    )
}