import React from "React";
import "./App.css";
import Text from "./components/Text/text.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Text conteudo="Olá Mundo" />
      </div>
    );
  }
}
