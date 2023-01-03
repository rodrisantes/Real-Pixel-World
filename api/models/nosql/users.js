const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserScheme = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const saltRound = 10;
UserScheme.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, saltRound, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserScheme.methods.isCorrectPassword = function(password, callback){
bcrypt.compare(password, this.password, function(err,res){
  if(err){
    callback(err)
  }else{
    callback(err, res)
  }
})
}


module.exports = mongoose.model("User", UserScheme);
