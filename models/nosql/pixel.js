const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const PixelScheme = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  userId: {
    type: mongoose.Types.ObjectId,
  },
  coordinates: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Pixel", PixelScheme);
