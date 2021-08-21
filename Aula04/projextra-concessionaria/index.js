const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

modeloCarro = [
    "Tracker",
    "Corolla", 
    "C3", 
    "Toro"
];

tipoCarro = [
    "SUV",
    "Sedan",
    "Hatch", 
    "Picape"
];

tipoCombustivel = [
    "flex",
    "gasolina",
    "flex",
    "Diesel"
];

marcaCarro = [
    "Chevrolet", 
    "Toyota", 
    "Citroen", 
    "FIAT"
];

ano = [
    "2020", 
    "2018", 
    "2015", 
    "2021"
]

class Carro {
    constructor(modelo, tipo, combustivel, marca, ano) {
        this.modelo = modelo;
        this.tipo = tipo;
        this.combustivel = combustivel;
        this.marca = marca;
        this.ano = ano;
    }
}

carros = [];
n = modeloCarro.length;
for (i=0; i<n; i++ ) {
    carro = new Carro(modeloCarro[i], tipoCarro[i], tipoCombustivel[i], marcaCarro[i], ano[i]);
    carros.push(carro);
}

app.get('/', (req, res) => {
    res.send('Concessionária Virtual Aleatória');
});

app.get('/carros', (req, res) => {
    res.send(carros);
});

app.get('/carros/:id', (req, res) => {
    const id = req.params.id - 1;
    const carro = carros[id];
    if (!carro) {
        res.send('Carro não encontrado.')
    }
    res.send(carro)
});

// rota post
app.post('/carros', (req, res) => {
    const modelo = req.body.modelo;
    const tipo = req.body.tipo;
    const combustivel = req.body.combustivel;
    const marca = req.body.marca;
    const ano = req.body.ano;
    carro = new Carro(modelo, tipo, combustivel, marca, ano);
    carros.push(carro);
    res.send(`Carro adicionado com sucesso!`);
});

// rota put
app.put('/carros/:id', (req, res) => {
    const id = req.params.id - 1;
    const oldCarro = carros[id]
    if (!oldCarro) {
        res.send('Carro não encontrado');
    }
    const modelo = req.body.modelo;
    const tipo = req.body.tipo;
    const combustivel = req.body.combustivel;
    const marca = req.body.marca;
    const ano = req.body.ano;
    carros[id] = new Carro(modelo, tipo, combustivel, marca, ano);
    res.send('Carro atualizado com sucesso!');
});

// rota delete
app.delete('/carros/:id', (req, res) => {
    const id = req.params.id - 1;
    if (0 <= id < carros.length-1){
        carros.splice(id, 1);
        res.send('Carro apagado com sucesso');
    }
    res.send('Carro não encontrado.')
    
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}/`);
});