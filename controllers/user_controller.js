const UserModel = require("../database/models/user_model"); 

//showing a list of all users
async function index(req, res) {
    let users = await UserModel.find();
    res.send("user/index", { users });
}

async function create(req, res) {
    //logic for creating a resource
    let { firstName, lastName, email, password } = req.body;
    let user = await UserModel.create({ firstName, lastName, email, password  })
        .catch(err => res.status(500).send(err));
    res.redirect("/");
}

module.exports = {
    index,
    create
} 
