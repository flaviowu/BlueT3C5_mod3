import './App.css';
import Card from './components/Cards'
import Form from './components/Form'
import { lista } from './components/jogosdb'

function App() {
  
  const listaJogos = [...lista]
  
  return (
    <div className="container-sm">
        <ul>
        {listaJogos.map( (jogo => {
          return (
              <li key={jogo.id}>
                <Card imgUrl={jogo.imgUrl} titulo={jogo.titulo} ano={jogo.ano} youtubeId={jogo.youtubeId}/>
              </li>
          )
        })
        )}
        </ul>
        <Form/>
    </div>
  );
}

export default App;
