const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const loginSuccess = (req, res) => {
    var token = jwt.sign({ sub: req.user._id }, keys.googleClientSecret);
    console.log("..............", req.user._id);
    res.cookie("jwt", token);
    res.redirect("/dashboard?token=" + token);
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
    res.redirect("/dashboard?token=" + token);
}

module.exports = {
    loginSuccess,
    logout,
    login
}