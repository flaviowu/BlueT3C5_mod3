import React, { useState, useEffect } from "react";
import "./App.css";
import ghibliMoviesList from "./Modules/ghibliMoviesDB";

export default function App() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [imgUrlFilme, setImgUrlFilme] = useState("");

  const [ghibliMovies, setGhibliMovies] = useState([...ghibliMoviesList]);
  const [editando, setEditando] = useState(false)
  const [idEdit, setIdEdit] = useState(null)

  useEffect(() => {
    if (idEdit !== null && editando) {
      const movie = ghibliMovies.filter((f) => f.id === idEdit)
      setNomeFilme(movie[0].nome)
      setImgUrlFilme(movie[0].imgURL)
    }
  }, [idEdit])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let idFilme = null
    if (editando === true){
      idFilme = idEdit
      const movie = ghibliMovies.filter((f) => f.id === idFilme)[0]
      const index = ghibliMovies.indexOf(movie)
      
      setGhibliMovies(() => {
        const novaLista = [...ghibliMovies]
        novaLista[index] = {
          id: idFilme,
          nome: nomeFilme,
          imgURL: imgUrlFilme,
        }
        return novaLista
      })

    } else if(editando === false) {
      idFilme = ghibliMovies[ghibliMovies.length - 1].id + 1;
      setGhibliMovies([...ghibliMovies,
        {
          id: idFilme,
          nome: nomeFilme,
          imgURL: imgUrlFilme,
        }
      ])

    }

    setEditando(false)
    setIdEdit(null)
    setNomeFilme("");
    setImgUrlFilme("");
  };

  const handleDelete = (id) => {
    setGhibliMovies(ghibliMovies.filter((f) => f.id !== id))
  }
  
  return (
    <>
      <div className="filmografia">
        <h1>Filmografia Ghibli | Longa Metragens</h1>
        <ul>
          {ghibliMovies.map((f) => (
            <li key={f.id}>
              <h3>{f.nome}</h3>
              <img src={f.imgURL} alt={f.nome} />
              <button type="button" onClick={() => {
                  setEditando(true)
                  setIdEdit(f.id)
                }}
              >
                Editar
              </button>
              <button type="button" onClick={() => handleDelete(f.id)}
                > 
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="adm">
        
        {/* Form */}
        <h2>Administração</h2>
        <form name="formulario" id="formulario" onSubmit={handleSubmit}>
          
          <label>Título o Filme: {nomeFilme}</label>
          <input
            type="text"
            name="nome"
            value={nomeFilme}
            onChange={(e) => {
              setNomeFilme(e.target.value);
            }}
          ></input>

          <label>URL da Imagem: {imgUrlFilme}</label>
          <input
            type="text"
            name="url-img"
            value={imgUrlFilme}
            onChange={(e) => setImgUrlFilme(e.target.value)}
          ></input>

          <button type="submit" id="cad-filme">
            Salvar
          </button>

        </form>
      </div>
    </>
  );
}
