const express = require("express");
const router = express();
// const { userModel } = require("../models/index");

router.get("/users", async (req, res) => {

    console.log("asdkaksd")
    res.send("onasdasd")
//   try {
//     console.log("askdmkñamsd")
//     const AllUsers = await userModel.find({});
//     if (AllUsers.length === 0) {
//       res.send("No existen usuarios");
//     } else {
//       res.send(AllUsers);
//     }
//   } catch (error) {
//     res.send((message = error));
//   }
});

module.exports = router;
