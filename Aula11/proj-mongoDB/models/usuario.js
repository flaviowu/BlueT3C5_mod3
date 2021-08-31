const mongoose = require("mongoose");

const usuarioModel = new mongoose.Schema({
  nome: { type: String, required: true },
  sobreNome: { type: String },
  cpf: { type: String, required: true },
  idade: { type: Date, required: true },
  senha: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

module.exports = usuarioModel;
