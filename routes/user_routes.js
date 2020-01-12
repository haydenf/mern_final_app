const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");


router.get("/users", UserController.index);

router.post("/", UserController.create);

router.get("/users/new", UserController.make);

router.get("/users/:id", UserController.show);

router.get("/users/edit/:id", UserController.edit);

router.put("/users/:id", UserController.update);

router.delete("/users/:id", UserController.destroy);

module.exports = router;