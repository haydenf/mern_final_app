const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const loginSuccess = (req, res) => {
    // var token = jwt.sign({ sub: req.user._id }, keys.googleClientSecret);
    var token = jwt.sign({ sub: req.user._id }, 'secret');
    console.log("..............", req.user._id);
    res.cookie("jwt", token);
    res.redirect("http://localhost:3000/dashboard?token=" + token);
}

const logout = (req, res) => {
    req.logout();
    res.cookie("jwt", null, { maxAge: -1 });
    res.redirect("/dashboard");
}

module.exports = {
    loginSuccess,
    logout
}