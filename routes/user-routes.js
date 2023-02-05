const express = require("express");
const userController = require("../controllers/user-controller");
const signup = require("../controllers/user-controller");
const router = express.Router();

// router.METHOD("/url", controller )

router.get("/", userController.getAllUser);
router.post("/signup", userController.signup);
router.post("/login", userController.login ) 

module.exports = router;
