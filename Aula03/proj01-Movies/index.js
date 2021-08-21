const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

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
 
// rota que cadastra um novo filmes
app.post('/filmes', (req, res) => {
    const movie = req.body.movie;
    const id = movies.length;
    movies.push(movie);

    res.send(`Filme adicionado com sucesso: ${movie}.
    O ID do filme é ${id}`)
});
// rota de mudar filmes da lista
app.put('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const movie = req.body.movie;
    const oldMovie = movies[id];
    movies[id] = movie;
    res.send(`Filme atualizado com sucesso: "${oldMovie}" agora é "${movie}".`)
});

// rota de deletar
app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id -1;
    movie = movies[id]
    if (!movie) {
        res.send("Filme não encontrado")
    }
    movies.splice(id, 1);
    res.send("Filme excluido com sucesso!");
});

app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const movie = movies[id];
    if(!movie) {
        res.send('Filme não Encontrado')
    } else {
        res.send(movie);
    }
});


app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}/`)
});