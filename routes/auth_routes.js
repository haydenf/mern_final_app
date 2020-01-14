const express = require("express");
const router = express.Router();
const AuthenticationController = require("./../controllers/auth_controller");
const passport = require("passport");



/* GET Google Authentication API. */
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  AuthenticationController.loginSuccess
);

router.get(
  "/logout",
  AuthenticationController.logout
)

module.exports = router;