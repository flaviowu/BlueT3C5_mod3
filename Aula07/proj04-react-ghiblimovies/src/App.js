import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [ nomeFilme, setNomeFilme] = useState('')
  const [ imgUrlFilme, setImgUrlFilme] = useState('')

  const [ ghibliMovies, setGhibliMovies ] = useState([

        {
          id: 1,
          nome: "O Castelo Animado",
          imgURL:
            "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/O-castelo-animado-capa-playarte-dvd.jpg",
        },

        {
          id: 2,
          nome: "A Viagem de Chihiro",
          imgURL:
            "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/A-Viagem-de-Chihiro-DVD.jpg",
        },
      
        {
          id: 3,
          nome: "Meu Amigo Totoro",
          imgURL:
            "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/meu-amigo-totoro-dvd-vers%C3%A1til.jpg",
        },
      
        {
          id: 4,
          nome: "Princesa Monoke",
          imgURL:
            "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/Princesa-Mononoke-DVD-capa-vers%C3%A1til.jpg",
        },
      
        {
          id: 5,
          nome: "O Serviço de Entregas da Kiki",
          imgURL:
            "https://i2.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/O-Servi%C3%A7o-de-Entregas-da-Kiki-vers%C3%A1til.jpg",
        }
      ]
    )
    
    let handleSubmit = (e) => {
      e.preventDefault()
      let IdFilme = ghibliMovies.length + 1
      const novoFilme = {
        id: IdFilme,
        nome: nomeFilme,
        imgURL: imgUrlFilme
      }      

      // console.log('-=-=-=-=-=-=-')
      // setGhibliMovies(ghibliMovies.push(novoFilme))
      console.log(novoFilme)
      console.log(ghibliMovies)
      setGhibliMovies([...ghibliMovies, novoFilme])


    }

    // let listarFilmes = () => {
    //   console.log('-=-=-=-')
    //   console.log(ghibliMovies)
    //   console.log(nomeFilme)
    //   console.log(imgUrlFilme)
    //   console.log('-=-=-=-')
    // }

    return (
      <>
        <div className="filmografia">
          <h1>Filmografia Ghibli | Longa Metragens</h1>
          <ul>
            {ghibliMovies.map( f => (
              <li key={f.id}>
                <h3>{f.nome}</h3>
                <img src={f.imgURL} alt={f.nome} />
              </li>
            ))}
          </ul>
        </div>
        <div className="adm">
              <h2>Administração</h2>
              <form name="formulario" id="formulario" onSubmit={handleSubmit}>
                <label>Título o Filme:{nomeFilme}</label>
                <input type="text" name="nome" value={nomeFilme} onChange={(e) => {
                  setNomeFilme(e.target.value)
                }}></input>
                <label>URL da Imagem:{imgUrlFilme}</label>
                <input type="text" name="url-img" value={imgUrlFilme} onChange={(e) =>
                  setImgUrlFilme(e.target.value)
                }></input>
                <button type="submit" id="cad-filme">Cadastrar</button>
              </form>
        </div>
      </>
    )
  }

