const express = require("express");
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

router.post("/", async (req, res) => {
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
      res.send("El usuario ha sido creado con exito")
    }
  } catch (error) {
    res.send((message = error));
  }
});

module.exports = router;
