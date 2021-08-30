import React from "react";
import "./Style/Cards.css";
import IFrameYouTube from "./youtubeFrame";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="card-info">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">Lançamento: {props.ano}</p>
        </div>
        <IFrameYouTube youtubeId={props.youtubeId}/>
        <div className="card-btn">
          <button type="button">Editar</button>
          <button type="button">Deletar</button>
        </div>
      </div>
    </div>
  );
}
