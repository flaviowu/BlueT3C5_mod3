const express = require("express");
const app = express();
const port = 3000;

const games = [
  "Jogo não encontrado",
  "Horizon: Zero Down",
  "Ghost of Tsushima",
  "Red Dead Rendemption 2",
  "The Last of Us",
  "Final Fantasy VII",
  "Shadow of the Colossus",
  "The Last Guardian",
];

const msgInicio = [
  "Olar!",
  "Olá, Mundo!",
  "欢迎光临",
  "いらっしゃえ！",
  "Bem Vindo",
  "Welcome to the PS4 Games Heaven",
];

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function fraseIni(num) {
  return msgInicio[num];
}

app.use(express.json()); // habilitar o use de JSON

app.get("/", (req, res) => {
  res.send(`<h1>${fraseIni(randomMinMax(0, msgInicio.length))}</h1>`);
});

// games.forEach(function (item, indice) {
//     console.log(item, indice);
// });

app.get("/games", (req, res) => {
  res.send(games);
});

app.get("/games/oftheday", (req, res) => {
  res.send(`<h1>${games[randomMinMax(0, games.length)]}</h1>`);
});

app.get("/games/:id", (req, res) => {
  const id = req.params.id;
  if (games[id]) {
    const id = req.params.id;
    const game = games[id];
    res.send(game);
  } else {
    res.send("<h2>Jogo nao Encontrado</h2>");
  }
});

// adicionar um jogo
app.post("/games", (req, res) => {
  const game = req.body.game;
  const id = games.length;
  games.push(game);

  res.send(`Jogo adicionado com sucesso: ${game}. O ID do filme é ${id}`);
});

// mudar um item da lista de jogos
app.put("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  const game = req.body.game;
  const oldGame = games[id];
  if (!oldGame) {
    res.send("Jogo inválido!");
  }
  games[id] = game;
  res.send(`Jogo ${oldGame}, atualizado com sucesso para: ${game}.`);
});

app.delete("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  const game = games[id];
  if (!game) {
    res.send("Game não Encontrado");
  }
  games.splice(id, 1);
  res.send("Jogo excluido com sucesso");
});

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}/`);
});
