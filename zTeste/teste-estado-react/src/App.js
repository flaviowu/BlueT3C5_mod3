import './App.css';
import { useState, useEffect } from 'react'
import Formulario from './components/form';
import Title from './components/titleH2'

function App() {
  const [ listaPalavras, setListaPalavras] = useState(["amarelo", "cachorro", "filme", "musica"])

  const onWordSubmit = (word) => {
    setListaPalavras([...listaPalavras, word])
  }

  return (
    <div className="App">
      {listaPalavras.map((item) => <Title itemLista = {item} />)}
      <Formulario onSubmit={onWordSubmit} />
      
    </div>
  );
}

export default App;
