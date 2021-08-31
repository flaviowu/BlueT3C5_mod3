const mongoose = require("mongoose");

const Usuario = mongoose.model("usuario", usuarioModel);

const usuarioModel = new mongoose.Schema({
    nome: { type: String, required: true },
    sobreNome: { type: String },
    cpf: { type: String, required: true },
    idade: { type: Date, required: true },
    senha: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now },
  });
  

const usuarioModel = require("./models/usuario");

module.exports = Usuario