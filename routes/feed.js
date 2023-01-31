const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// asignamos getFleets como función que debe ejecutarse al hacer la petición GET a la ruta /fleets
// ejecuta peticiones GET /feed/fleets
router.get("/fleets", feedController.getFleets);

// ejecuta peticiones POST /feed/fleets
router.post("/fleets", feedController.createFleet);

module.exports = router;
