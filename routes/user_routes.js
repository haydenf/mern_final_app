const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");


router.get("/users", UserController.index);
router.post("/users", UserController.create);

module.exports = router;