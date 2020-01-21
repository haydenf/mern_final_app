const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const loginSuccess = (req, res) => {
    var token = jwt.sign({ sub: req.user._id }, keys.googleClientSecret);
    console.log("..............", req.user._id);
    res.cookie("jwt", token);
    // res.send(req.user)
    res.redirect("http://localhost:3000/dashboard?=");
}

const logout = (req, res) => {
    req.logout();
    res.cookie("jwt", null, { maxAge: -1 });
    res.redirect("/dashboard");
}

const login = (req, res) => {
    var token = jwt.sign({ sub: req.user._id }, keys.googleClientSecret);
    console.log("..............", req.user._id);
    res.cookie("jwt", token);
    res.redirect("http://localhost:3000/dashboard?token=" + token + req.user);
}

module.exports = {
    loginSuccess,
    logout,
    login
}