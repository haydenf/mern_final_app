const UserModel = require("../database/models/user_model");

//showing a list of all users
async function index(req, res) {
    let users = await UserModel.find();
    res.json(users);
}

//shows form to make new user
function make(req, res) {
    res.render("CreateUserView");
}

async function create(req, res) {
    let { googleID, email, password, firstName, lastName, image } = req.body;
    let user = await UserModel.create({ googleID, email, password, firstName, lastName, image })
        .catch(err => res.status(500).send(err));
    res.redirect("/users");
}

const show = async (req, res) => {
    let { id } = req.params
    let user = await UserModel.findById(id)
        .catch(err => res.status(500).send(err))
    res.render("user/show", {user});
}

const edit = async (req, res) => {
    let { id } = req.params
    let user = await UserModel.findById(id)
        .catch(err => res.status(500).send(err))
    res.render("user/edit", {user});
}

const update = async (req, res) => {
    let { id } = req.params
    let { googleID, email, password, firstName, lastName, image } = req.body
    await UserModel.findByIdAndUpdate(id, {googleID, email, password, firstName, lastName, image})
        .catch(err => res.status(500).send(err));
    res.redirect(`/users/${id}`)
}

const destroy = async (req, res) => {
    let { id } = req.params
    await UserModel.findByIdAndDelete(id)
        .catch(err => res.status(500).send(err));
    res.redirect('/users');
}

module.exports = {
    index,
    create,
    make,
    show,
    edit,
    update,
    destroy
}