import React, { Component } from 'react';
import "./Text.css";

export default class Text extends Component {
  
  render() {
    return (
      <h1>
        {this.props.text}
      </h1>
    )
  }
}