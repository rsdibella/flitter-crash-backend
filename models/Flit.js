"use strict";

const mongoose = require("mongoose");

//definir esquema de tweet

const flitSchema = mongoose.Schema(
  {
    //  id: { type: Number, index: true },
    id_user: { type: Number, index: true },
    message: { type: String, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flit", flitSchema);
