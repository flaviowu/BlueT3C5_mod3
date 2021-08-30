import './App.css';
import { useState } from 'react';
import Card from './components/Cards'
import { lista } from './components/jogosdb'

function App() {
  const [nomeJogo, setNomeJogo] = useState("");
  const [anoJogo, setAnoJogo] = useState("");
  const [imgUrlJogo, setImgUrlJogo] = useState("");
  const [gameplay, setGameplayJogo] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault()
    return
  };

  function handleEdit(){
    return
  }

  function handleDelete(){
    return
  }

  const listaJogos = [...lista]

  return (
    <div className="container-sm">
        <img src="https://upload.wikimedia.org/wikipedia/pt/d/de/Mega_man_logo.png" alt="logo mega man"/>
        <ul>
        {listaJogos.map( (jogo => {
          return (
              <li key={jogo.id}>
                <Card 
                  imgUrl={jogo.imgUrl} 
                  titulo={jogo.titulo}
                  ano={jogo.ano}
                  youtubeId={jogo.youtubeId}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  />
              </li>
          )
        })
        )}
        </ul>
        <div className="form-adm">
          <form name="cad-adm">
            <h3>Administração</h3>
            <input
              type="text"
              name="titulo"
              onChange={(e) => setNomeJogo(e.target.value)}
              placeholder="Digite o Título do Jogo"
            />
            <input 
              type="text" 
              name="ano"
              onChange={(e) => setAnoJogo(e.target.value)}
              placeholder="Digite o ano do Jogo"
              
            />
            <input
              type="text"
              name="img-url"
              onChange={(e) => setImgUrlJogo(e.target.value)}
              placeholder="Digite a URL da imagem"
            />
            <input
              type="text"
              name="youtubeId"
              onChange={(e) => setGameplayJogo(e.target.value)}
              placeholder="Digite o link do Gameplay"
            />
            <button type="submit" onClick={handleSubmit}>
              Salvar Jogo
            </button>
          </form>
        </div>
    </div>
  );
}

export default App;
