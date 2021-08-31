const express = require("express");
const mongoose = require("mongoose");



const url = "mongodb://localhost:27017/usuarios";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const usuario1 = new Usuario({
//   nome: "Kiki",
//   sobrenome: "Majyo",
//   cpf: "00000000000",
//   idade: "1992-09-09",
//   senha: "takubin",
// });




// Usuario.findByIdAndDelete("612d7b60ef3d8415c89d86d3")
// .then(()=> console.log("Usuário Excluído"))
// .catch((err) => console.error(err))

//findOne
Usuario.find({ nome: "Kiki" })
.then((usuarios) => {
  console.log(usuarios)
})
.catch((err) => {
  console.error(err)
})

// usuario1
//   .save()
//   .then(() => console.log("Filme Salvo! "))
//   .catch(() => console.error(err));

// const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Bluemers!");
});

app.listen(port, () => {
  console.info(`App rodando na porta ${port}`);
});
