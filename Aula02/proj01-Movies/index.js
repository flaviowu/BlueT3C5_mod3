const express = require("express");
const app = express();

const port = 3000;

const movies = [
    'O Castelo Animado',
    'A Viagem de Chihiro',
    'Meu Amigo Totoro',
    'Princesa Monoke',
    'O Serviço de Entregas da Kiki'
]

//GET /home
app.get('/', (req, res) => {
    res.send("Bem vindo ao Ghibli World");
});

app.get('/filmes', (req, res) => {
    res.send(movies);
});

app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const movie = movies[id];
    res.send(movie);
});

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}/`)
});