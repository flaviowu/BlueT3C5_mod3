import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ghibliMovies: [
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
    };
  };
  
  render() {
    const { ghibliMovies } = this.state;
    
    return (
      <div className="container">
        <h1>Filmografia Ghibli | Longa Metragem (Parcial)</h1>
        <ul>
          {ghibliMovies.map( f => (
            <li key={f.id}>
              <h3>{f.nome}</h3>
              <img src={f.imgURL} alt={f.nome} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
