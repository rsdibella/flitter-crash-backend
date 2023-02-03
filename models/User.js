"use strict"

const mongoose = require("mongoose");

//definir esquema de tweet
const userSchema = mongoose.Schema({
    name: { type: String, index: true },
    alias: { type: String, index: true , unique: true},
    email: { type: String, index: true , unique: true},
    password: { type: String, index: true },
    public: { type: Boolean, index: true },
    foto: String
});
// crear el modelo
const User = mongoose.model('User', userSchema);

// exportar el modelo
module.exports = User;

//crear metodo para verificar contrasena
userSchema.methods.encrypPassword = password => {

}