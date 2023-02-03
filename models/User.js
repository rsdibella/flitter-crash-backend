const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, index: true },
  alias: { type: String, index: true, unique: true },
  email: { type: String, index: true, unique: true },
  password: { type: String, index: true, minlength: 8 },
  // foto: String
});

module.exports = mongoose.model("User", userSchema);
