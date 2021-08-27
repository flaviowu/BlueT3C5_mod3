import React from "react";
import "./Style/Cards.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.ano}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
}
