const Flit = require("../models/Flit");
const { validationResult } = require("express-validator");

// exportar modelo de fleet (temporal, con dummy data)
exports.getFlits = (req, res, next) => {
  Flit.find()
    .then((flits) => {
      res.status(200).json({
        successMessage: "Lista de flits obtenida",
        flits: flits,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createFlit = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errorMessage: "Validation failed, entered data is incorrect.",
      errors: errors.array(),
    });
  }
  const message = req.body.message;
  const id_user = req.body.id_user;
  const flit = new Flit({
    id_user: id_user,
    message: message,
  });
  // aquí se crea el flit en la base de datos
  flit
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        successMessage: "Fleet creado",
        flit: {
          result,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
