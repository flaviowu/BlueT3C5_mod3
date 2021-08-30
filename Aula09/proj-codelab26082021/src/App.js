import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Cards";
import { lista } from "./components/jogosdb";
import { getGameById, getIndexById } from "./modules/util.js";

function App() {
  const [nomeJogo, setNomeJogo] = useState("");
  const [anoJogo, setAnoJogo] = useState("");
  const [imgUrlJogo, setImgUrlJogo] = useState("");
  const [gameplay, setGameplayJogo] = useState("");
  const [edicao, setEdicao] = useState(false);
  const [idEdicao, setIdEdicao] = useState(null)
  const [listaJogos, setListaJogos] = useState([...lista]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let novoId = listaJogos[listaJogos.length - 1].id + 1;
    const novoJogo = {
      id: novoId,
      titulo: nomeJogo,
      ano: anoJogo,
      imgUrl: imgUrlJogo,
      youtubeId: gameplay,
    };

    setListaJogos([...listaJogos, novoJogo]);
  };

  useEffect(() => {
    if (idEdicao !== null && edicao) {
      const game = listaJogos.filter((f) => f.id === idEdicao);
      setNomeJogo(game[0].titulo);
      setAnoJogo(game[0].ano);
      setImgUrlJogo(game[0].imgUrl)
      setGameplayJogo(game[0].youtubeId)
    }
  }, [idEdicao]);

  function handleDelete(id) {
    setListaJogos(listaJogos.filter((jogo) => jogo.id !== id));
  }

  return (
    <>
    <div className="container-sm">
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/d/de/Mega_man_logo.png"
        alt="logo do mega man"
      />
      <ul>
        {listaJogos.map((jogo) => {
          return (
            <li key={jogo.id}>
              <Card
                imgUrl={jogo.imgUrl}
                titulo={jogo.titulo}
                ano={jogo.ano}
                youtubeId={jogo.youtubeId}
                handleDelete={handleDelete}
              />
              <div className="card-btn">
                <button type="button" onClick={() => {
                  setEdicao(true)
                  setIdEdicao(jogo.id)
                }}>
                  Editar
                </button>
                <button type="button" onClick={() => handleDelete(jogo.id)}>
                  Deletar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
      <div className="form-adm" style={{display: "flex"}}>
        <form name="cad-adm">
          <h3>Administração</h3>
          <input
            type="text"
            name="titulo"
            onChange={(e) => setNomeJogo(e.target.value)}
            value={nomeJogo}
            placeholder="Digite o Título do Jogo"
          />
          <input
            type="text"
            name="ano"
            onChange={(e) => setAnoJogo(e.target.value)}
            value={anoJogo}
            placeholder="Digite o ano do Jogo"
          />
          <input
            type="text"
            name="img-url"
            onChange={(e) => setImgUrlJogo(e.target.value)}
            value={imgUrlJogo}
            placeholder="Digite a URL da imagem"
          />
          <input
            type="text"
            name="youtubeId"
            onChange={(e) => setGameplayJogo(e.target.value)}
            value={gameplay}
            placeholder="Digite o link do Gameplay"
          />
          <button type="submit" onClick={handleSubmit}>
            Salvar Jogo
          </button>
        </form>
        {/* <button type="button" onclick={0}>Inserir dados de teste 1</button> */}
      </div>
      </>
  );
}

export default App;
