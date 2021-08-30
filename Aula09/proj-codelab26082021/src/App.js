import './App.css';
import { useState } from 'react';
import Card from './components/Cards'
import { lista } from './components/jogosdb'
import { getGameById } from './modules/util.js'

function App() {
  const [nomeJogo, setNomeJogo] = useState("");
  const [anoJogo, setAnoJogo] = useState("");
  const [imgUrlJogo, setImgUrlJogo] = useState("");
  const [gameplay, setGameplayJogo] = useState("");
  const [listaJogos, setListaJogos] = useState([...lista])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let novoId = listaJogos[listaJogos.length -1].id +1
    const novoJogo = {
      id: novoId,
      titulo: nomeJogo,
      ano: anoJogo,
      imgUrl: imgUrlJogo,
      youtubeId: gameplay.split('=')[1]
    }

    setListaJogos([...listaJogos, novoJogo])
  };

  function handleEdit(){
    return
  }

  function handleDelete(id){
    setListaJogos(listaJogos.filter((jogo)=> jogo.id !== id))

    return
  }


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
                <div className="card-btn">
                  <button type="button">Editar</button>
                  <button type="button" onClick={() => handleDelete(jogo.id)}>Deletar</button>
                </div>
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
            <button type="button">
              Modo Edição
            </button>
          </form>
          {/* <button type="button" onclick={0}>Inserir dados de teste 1</button> */}
        </div>
    </div>
  );
}

export default App;
