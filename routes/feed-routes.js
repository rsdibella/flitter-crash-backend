const express = require("express");
const { body } = require("express-validator");

const feedController = require("../controllers/feed-controller");

const router = express.Router();

// asignamos getFleets como función que debe ejecutarse al hacer la petición GET a la ruta /fleets
// ejecuta peticiones GET /feed/fleets
router.get("/flits", feedController.getFlits);

// ejecuta peticiones POST /feed/fleets
router.post(
  "/flits",
  [body("message").trim().isLength({ min: 1 })],
  feedController.createFlit
);

module.exports = router;
