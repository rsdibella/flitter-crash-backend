"use strict"

const mongoose = require("mongoose");

//definir esquema de tweet

const anuncioSchema = mongoose.Schema({
   id: { type: Number, index: true },
   id_user: { type: Number, index: true },
   timestamp: { type: Date, index: true },
   message: { type: String, index: true },
   foto: String
   
});

