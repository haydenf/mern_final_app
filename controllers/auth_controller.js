const loginSuccess = (req, res) => {
    var token = req.user.token;
    res.redirect("http://localhost:3000?token=" + token);
}

module.exports = {
    loginSuccess
}