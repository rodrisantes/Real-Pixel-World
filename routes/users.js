const express = require("express");
const { appendFile } = require("fs");
const router = express();
const { userModel } = require("../models/index");

router.get("/", async (req, res) => {
  try {
    const AllUsers = await userModel.find({});
    if (AllUsers.length === 0) {
      res.send("No existen usuarios");
    } else {
      res.send(AllUsers);
    }
  } catch (error) {
    res.send((message = error));
  }
});

router.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await userModel.find({ email: email });
    if (user.length > 0) {
      res.send("El usuario ya existe");
    } else {
      await userModel.create({
        email,
        username,
        password,
      });
      res.send("El usuario ha sido creado con exito");
    }
  } catch (error) {
    res.send((message = error));
  }
});

router.post("/authenticate", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }, (err, user) => {
    if (err) {
      res.status(500).send("Error al autenticar al usuario");
    }
    if (!user) {
      res.status(500).send("El usuario no existe");
    } else {
      user.isCorrectPassword(password, (err, result) => {
        if (err) {
          res.status(500).send("Error al autenticar");
        } else if (result) {
          res.status(200).send("Usuario autenticado correctamente");
        } else {
          res.status(500).send("Usuario o contranseña incorrecta");
        }
      });
    }
  });
});

module.exports = router;
