const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// Rota GET que retorna todos os usuários
router.get("/all", async (_, res) => {
  await User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;