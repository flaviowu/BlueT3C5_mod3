import React, { Component } from "react";
import "./text.css";

export default class Text extends Component {
  render() {
    return <h1>{this.props.conteudo}</h1>;
  }
}
