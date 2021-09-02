import './App.css';
import { useState } from 'react'
import Formulario from './components/form';
import Frame from './components/frame'

function App() {
  const [ listaPalavras, setListaPalavras] = useState(["amarelo", "cachorro", "filme", "musica"])
  const [ novaPalavra, setNovaPalavra ] = useState('Olá React')

  return (
    <div className="App">
      {listaPalavras.map((item) => <Frame palavra = {item} />)}
      <Formulario novaPalavra={novaPalavra} setNovaPalavra={setNovaPalavra}/>
      
    </div>
  );
}

export default App;
