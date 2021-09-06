const express = require("express");

const server = express();
server.use(express.json());

server.get('/', (_, res) =>{
    res.send('Servidor OK!')
})

const port = 3000;
server.listen(port, () => {
    console.info(`Servidor rodando em http://localhost:${port}/`)
})