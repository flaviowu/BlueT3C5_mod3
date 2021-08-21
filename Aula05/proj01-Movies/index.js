const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const movies = [
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
  },
];

// Funções de Validação
const getFilmesValidos = () => movies.filter(Boolean);

const getFilmeById = (id) =>
  getFilmesValidos().find((movie) => movie.id === id);

const getIndexById = (id) =>
  getFilmesValidos().findIndex((movie) => movie.id === id);

//GET rota /home *ok*
app.get("/", (req, res) => {
  res.send("Bem vindo ao Ghibli World");
});

// GET rota para listar filmes *ok*
app.get("/filmes", (req, res) => {
  res.send(getFilmesValidos());
});

// GET - rota para pegar apenas um filme *ok*
app.get("/filmes/:id", (req, res) => {
  const id = +req.params.id;
  const movie = getFilmeById(id);

  if (!movie) {
    res.send("Filme não Encontrado");
  } else {
    res.send(movie);
  }
});

// POST  - rota que cadastra um novo filme *ok*
app.post("/filmes", (req, res) => {
  const movie = req.body;

  if (!movie || !movie.nome || !movie.imgURL) {
    res.status(400).send({
      message: "Filme Inválido, tente novamente",
    });
    return;
  }

  const lastMovie = movies[movies.length - 1];

  if (movies.length) {
    // se a lista de filmes não estiver vazia
    movie.id = lastMovie.id + 1; // define a id do filme a ser adicionado
  } else {
    movie.id = 1; // senão, como a lista está vazia, a id é definida com 1
  }
  movies.push(movie);
  res.send(`Filme adicionado com sucesso: ${movie.nome} com i ID ${movie.id}`);
});

//PUT rota para atualizar filmes da lista *ok*
app.put("/filmes/:id", (req, res) => {
  const id = +req.params.id;

  const movieIndex = getIndexById(id);
  console.log(movieIndex);

  if (movieIndex < 0) {
    res.status(404).send({
      message: "O filme não foi encontrado, tente novamente!",
    });
    return;
  }

  const newMovie = req.body;

  if (!Object.keys(newMovie).length) {
    res.status(400).send({
      message: "O body está vazio!",
    });
    return;
  }

  if (!newMovie || !newMovie.nome || !newMovie.imgURL) {
    res.status(400).send({
      message: "Filme Inválido, tente novamente!",
    });
    return;
  }

  const movie = getFilmeById(id);

  movies[movieIndex] = {
    ...movie,
    ...newMovie,
  };

  res.send(
    `Filme atualizado com sucesso: "${movie.nome}" agora é "${newMovie.nome}".`
  );
});

// rota de deletar *ok*
app.delete("/filmes/:id", (req, res) => {
  const id = +req.params.id;
  console.log(`id = ${id}`);

  const movieIndex = getIndexById(id);
  console.log(movieIndex);

  if (!(0 <= movieIndex <= movies.length - 1)) {
    res.status(404).send({
      message: "Filme não encontrado, tente novamente!",
    });
    return;
  }

  movies.splice(movieIndex, 1);
  res.send("Filme removido com sucesso!");
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}/`);
});
