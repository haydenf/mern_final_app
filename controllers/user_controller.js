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
    console.log("create method")
    let { googleID, email, password, firstName, lastName, image } = req.body;
    let user = await UserModel.create({ googleID, email, password, firstName, lastName, image })
    new User(user)
        .save()
        .then(user => {
            console.log("WE CREATED A USER: ", user);
            res.json(user);
          })
        .catch(err => res.status(500).send(err));
    res.redirect("/users");
}

// const create = (req, res, next) => {
//     const user = new User(req.body)
//     user.save((err, result) => {
//       if (err) {
//         return res.status(500).json({
//           error: errorHandler.getErrorMessage(err)
//         })
//       }
//       res.status(200).json({
//         message: "Successfully signed up!"
//       })
//     })
// }

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

async function create(req, res) {
    //logic for creating a resource
    let { firstName, lastName, email, password } = req.body;
    let user = await UserModel.create({ firstName, lastName, email, password  })
        .catch(err => res.status(500).send(err));
    res.redirect("/");
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
