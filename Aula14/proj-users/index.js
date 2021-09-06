const express = require("express");
const Conn = require("./models/conn/conn");

const server = express();
server.use(express.json());

Conn("localhost", 27017, "user");

// landing page
server.get("/", (_, res) => {
  res.send("Servidor OK!");
});

// rotas de para registro e autenticação de usuários
const user = require("./routers/user.routes")
server.use("/users", user)


const port = 3000;
server.listen(port, () => {
  console.info(`Servidor rodando em http://localhost:${port}/`);
});
