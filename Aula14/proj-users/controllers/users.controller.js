const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const modelUser = mongoose.model("User");

let userController = {};

userController.alUsers = (req, res) => {
  modelUser
    .find()
    .then((results) => res.json(results))
    .catch((err) => res.send(err));
};

userController.newUser = (req, res) => {
  if (req.body.username && req.body.password) {
    if (req.body.password2 && req.body.password == req.body.password2) {
      // password2 é o "repita o password" na hora do registro

      modelUser.findOne({ username: req.body.username }).then((user) => {
        if (user) {
          res.json({
            success: false,
            message: "Este usuário já existe!",
          });
        } else {
          bcrypt.hash(req.body.password, 10).then((hash) => {
            let encryptedPassword = hash;

            let newUser = new modelUser({
              username: req.body.username,
              password: encryptedPassword,
              email: req.body.email,
            });
            newUser
              .save()
              .then(() =>
                res.json({
                  success: true,
                  message: "Usuário criado com sucesso!",
                  statusCode: 201,
                })
              )
              .catch((err) =>
                res.json({ success: false, message: err, statusCode: 500 })
              );
          });
        }
      });
    } else {
      res.json({
        success: false,
        message: "As senhas não conferem, Tente Novamente",
        statusCode: 400,
      });
    }
  } else {
      res.json({ success: false, message: "Campos Usuário e Senha são obrigatórios", statusCode: 400})
  }
};

module.exports = userController;
