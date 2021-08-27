import './App.css';
import Card from './components/Cards'
import Form from './components/Form'
import { lista } from './components/jogosdb'

function App() {
  
  const listaJogos = [...lista]
  
  return (
    <div className="App">
      <div>
        {listaJogos.map((jogo) => <Card titulo= {jogo.titulo} ano={jogo.ano} imgUrl={jogo.imgUrl}/>)}
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
}

export default App;
