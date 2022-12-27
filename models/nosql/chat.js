const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const ChatScheme = new mongoose.Schema(
  {
    id : {
      type : mongoose.Types.ObjectId,
      },
    userID : {
      type : mongoose.Types.ObjectId
    },
    text: {
      type: String,
    },
  }
)

module.exports = mongoose.model("Chat", ChatScheme)