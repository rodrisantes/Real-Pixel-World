const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserScheme = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password:{
    type : String
  }
});

module.exports = mongoose.model("User", UserScheme);
