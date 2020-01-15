const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const loginSuccess = (req, res) => {
    var token = jwt.sign({ sub: req.user._id }, keys.googleClientSecret);
    res.cookie("jwt", token);
    res.redirect("http://localhost:3000?token=" + token);
}

const logout = (req, res) => {
    res.send("BEFORE LOGOUT: " + req.cookie)
    req.logout();
    res.cookie("jwt", null, { maxAge: -1 });
    console.log("AFTER LOGOUT: " + req.cookie)
    res.redirect("/");
}

module.exports = {
    loginSuccess,
    logout
}