const express = require("express");
const Conn = require("./models/conn/conn");

const app = express();
Conn("localhost", 27017, "filmes");

app.use(express.json());

const port = 3000;

const filme = require("./routes/filmes.route");
app.use("/filmes", filme);

app.listen(port, () => {
  console.info(`Servidor conectado na porta ${port}`);
});
