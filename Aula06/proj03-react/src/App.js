import React from "react";
import "./App.css";
import Text from "./components/Text/Text";

const jogos = [
  "Horizon: Zero Dawn",
  "Spider-man",
  "Ghost of Tsushima",
  "Gravity Rush"
]; 

export default class App extends React.Component {
  render() {
    return (
      <>
        <Text text = { jogos[0] } />
        <Text text = { jogos[1] } />
        <Text text = { jogos[2] } />
        <Text text = { jogos[3] } />
      </>
    )
  };
};
