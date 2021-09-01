const express = require("express");
const router = express.Router();
const Musica = require("../models/musicas.js");

router.post("/add", async (req, res) => {
  await Musica.create(req.body)
    .then(() => {
      res.status(200).send("Musica adicionada com sucesso.");
    })
    .catch((err) => {
      res.status(400).send("Algo de errado com a música, tente novamente");
    });
});

router.get("/", (req, res) => {
  Musica.find({})
    .then((musica) => {
      res.send(musica);
    })
    .catch((err) => console.error(err));
});

router.get("/findbyid/:id", async (req, res) => {
  await Musica.find({ _id: req.params.id })
    .then((musica) => {
      res.send(musica);
    })
    .catch((err) => console.error(err));
});

router.put("/update/:id", async (req, res) => {
  await Musica.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.status(200).res.send('Atualizado com sucesso'))
    .catch((err) => console.error(err));
});

router.delete("/delete/:id", (req, res) => {
  res.send("rota /delete musica");
});

module.exports = router;
