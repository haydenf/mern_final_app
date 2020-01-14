const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserController = require("./../controllers/user_controller");


router.get("/users", UserController.index);

router.post("/", UserController.create);

router.get("/users/new", UserController.make);

router.post("/users", UserController.create);

router.get("/users/:id", passport.authenticate('jwt', {session: false}), UserController.show);

router.get("/users/edit/:id", UserController.edit);

router.put("/users/:id", UserController.update);

router.delete("/users/:id", UserController.destroy);

module.exports = router;