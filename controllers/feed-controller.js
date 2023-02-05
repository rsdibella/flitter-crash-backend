const Flit = require("../models/Flit");
const { validationResult } = require("express-validator");

// exportar modelo de flit (temporal, con dummy data)
exports.getFlits = (req, res, next) => {
  Flit.find()
    .then((flits) => {
      res.status(200).json({
        successMessage: "Lista de flits obtenida",
        flits: flits,
      });
    })
    .catch((err) => {
      if (err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createFlit = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(
      "Validación fallida, los datos introducidos no son válidos."
    );
    // 422 = error de validación
    error.statusCode = 422;
    throw error;
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
        successMessage: "Flit creado",
        flit: {
          result,
        },
      });
    })
    .catch((err) => {
      if (err.statusCode) {
        // 500 = error de servidor
        err.statusCode = 500;
      }
      // como el código es asíncrono, mandamos el error al próximo middleware
      next(err);
    });
};

exports.getFlit = (req, res, next) => {
  const flitId = req.params.flitId;
  Flit.findById(flitId)
    .then((flit) => {
      if (!flit) {
        const error = new Error("No se pudo encontrar el flit.");
        error.statusCode = 404;
        // aunque estemos dentro de un bloque asíncrono, catch recogerá el error que tira el throw y lo pasará al próximo middleware con next()
        throw error;
      }
      res.status(200).json({ successMessage: "Flit obtenido.", flit: flit });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
