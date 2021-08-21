const express = require("express");
const app = express();
const port = 3000;

const games =[
    "Horizon: Zero Down",
    "Ghost of Tsushima",
    "Red Dead Rendemption 2",
    "The Last of Us",
    "Final Fantasy VII Remake"
]

const msgInicio = ["OOOOOOOii", 
    "Olá Amigo, Estou Aqui", 
    "Boooooooo",
    "Hello World",
    "1, 2, 3, testando...",
    "Welcome to the PS4 Heaven"];

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fraseIni(num) {
    return msgInicio[num];
}

app.get('/', (req, res) => {
    res.send(`<h1>${fraseIni(randomMinMax(0, msgInicio.length))}</h1>`);
});

games.forEach(function (item, indice) {
    console.log(item, indice);
});

app.get('/games', (req, res) => {
    res.send(games);
});

app.get('/games/oftheday', (req, res) =>{
    res.send(`<h1>${games[randomMinMax(0, games.length)]}</h1>`);
});

app.get('/games/:id', (req, res) => {
    const id = req.params.id
    if (games[id]) {
        const id = req.params.id;
        const game = games[id];
        res.send(game);  
    } else {
        res.send("<h2>Jogo nao Encontrado</h2>")
    };
    
});

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}/`)
})
