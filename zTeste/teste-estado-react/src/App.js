import './App.css';
import { useState } from 'react'
import Formulario from './components/form';
import Title from './components/titleH2'

function App() {
  const [ listaPalavras, setListaPalavras] = useState(["amarelo", "cachorro", "filme", "musica"])

  const onWordSubmit = (word) => {
    setListaPalavras([...listaPalavras, word])
  }
  const keyGen = (item, lista) => {
    return lista.indexOf(item)
  }

  return (
    <div className="App">
      <ul> 
      {listaPalavras.map((item) => 
          <li key={keyGen(item, listaPalavras)}>
            <Title itemLista = {item} /> 
          </li>
        )}</ul>
      <Formulario onSubmit={onWordSubmit} />
    </div>
  );
}

export default App;
