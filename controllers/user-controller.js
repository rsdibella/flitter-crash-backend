const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const service = require("../services/index");
const mongoose = require("mongoose");
// console.log(service);

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find().populate("flits", {
      message: 1,
      createdAt: 1,
    });
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404), json({ mesage: "No Users Found." });
  }
  return res
    .status(200)
    .json({ successMessage: "Lista de usuarios obtenida", users });
};

const getOneUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      const error = new Error("No se pudo encontrar el usuario.");
      error.statusCode = 404;
      throw error;
    }
    const user = await User.findById(userId);
    console.log(user);
    res.status(200).json({ successMessage: "Usuario obtenido.", user: user });
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

const followUser = async (req, res, next) => {};

const unfollowUser = async (req, res, next) => {};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body; //frontend
  // existing user valida usuarios
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exist! Login instead.." });
  }
  const hashedPassword = bcryptjs.hashSync(password);

  const user = new User({
    name,
    email,
    password,
    password: hashedPassword,
  });
  //encrypted password
  try {
    user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({
    successMessage: "Usuario registrado",
    user: user,
    token: service.createToken(user),
  });
};
const login = async (req, res, next) => {
  const { email, password } = req.body; //SOLO email y password fronten
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldnt find user by this email.." });
  }
  const isPasswordCorrect = bcryptjs.compareSync(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    return res.status(404).json({ message: "Incorrect password" });
  }
  return res.status(200).json({
    message: "Login Successfull",
    token: service.createToken(existingUser),
  });
};

module.exports = {
  getAllUser,
  signup,
  login,
  getOneUser,
  followUser,
  unfollowUser,
};
