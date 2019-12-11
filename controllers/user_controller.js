const UserModel = require("../database/models/user_model"); 

//showing a list of all users
async function index(req, res) {
    let users = await UserModel.find();
    res.send("user/index", { users });
}

module.exports = {
    index
} 
