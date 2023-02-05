const express = require("express");
const { body } = require("express-validator");

const feedController = require("../controllers/feed-controller");

const router = express.Router();

// asignamos getFleets como función que debe ejecutarse al hacer la petición GET a la ruta /flits
// ejecuta peticiones GET /feed/flits
router.get("/flits", feedController.getFlits);

// ejecuta peticiones POST /feed/flits
router.post(
  "/flits",
  [body("message").trim().isLength({ min: 1 })],
  feedController.createFlit
);

// peticiones GET para un solo flit
router.get("/flits/:flitId", feedController.getFlit);

module.exports = router;
