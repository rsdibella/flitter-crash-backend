const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// asignamos getFleets como función que debe ejecutarse al hacer la petición GET a la ruta /fleets
// ejecuta peticiones GET /feed/fleets
router.get("/fleets", feedController.getFleets);

module.exports = router;
