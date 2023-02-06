const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, index: true },
  email: { type: String, index: true, unique: true },
  password: { type: String, index: true, minlength: 8 },
  avatar: { type: String },
  flits: [{ type: Schema.Types.ObjectId, ref: "Flits" }],
  peopleYouFollow: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("User", userSchema);
