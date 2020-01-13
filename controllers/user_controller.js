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

const create = async (req, res) => {
    console.log(".......create method")
    let { firstName, lastName, email, password, image } = req.body;
    console.log(req.body);
    let user = await UserModel.create({ firstName, lastName, email, password, image })
    new UserModel(user)

        .save()
        .then(user => {
            console.log("WE CREATED A USER: ", user);
            res.json(user);
          })
        .catch(err => res.status(500).send(err));
    res.status(200).json({
        message: "Successfully signed up!",
        success: true
    });
}

const show = async (req, res) => {
    let { id } = req.params
    let user = await UserModel.findById(id)
        .catch(err => res.status(500).send(err))
    res.render("user/show", {user});
}

//finds user to edit
const edit = async (req, res) => {
    let { id } = req.params
    let user = await UserModel.findById(id)
        .catch(err => res.status(500).send(err))
    res.render("user/edit", {user});
}

//saves updated info on user
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
