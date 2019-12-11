const UserModel = require("../database/models/user_model");

//showing a list of all users
async function index(req, res) {
    let users = await UserModel.find();
    res.json(users);
}

// function make(req, res) {
//     //shows the form to create the resource
//     res.render("author/new");
// }

// async function create(req, res) {
//     let { name, bio, gender } = req.body;
//     let author = await AuthorModel.create({ name, bio, gender })
//         .catch(err => res.status(500).send(err));
//     res.redirect("/authors");
// }

// const show = async (req, res) => {
//     // get the author specific data from the author model
//     let { id } = req.params
//     let author = await AuthorModel.findById(id) //any mongoose specific interaction returns a promise
//         .catch(err => res.status(500).send(err))
//     res.render("author/show", {author});
// }

// const edit = async (req, res) => {
//     let { id } = req.params
//     let author = await AuthorModel.findById(id)
//         .catch(err => res.status(500).send(err))
//     res.render("author/edit", {author});
// }

// const update = async (req, res) => {
//     let { id } = req.params
//     let { name, bio, gender } = req.body
//     await AuthorModel.findByIdAndUpdate(id, {name, bio, gender})
//         .catch(err => res.status(500).send(err));
//     res.redirect(`/authors/${id}`)
// }

// const destroy = async (req, res) => {
//     let { id } = req.params
//     await AuthorModel.findByIdAndDelete(id)
//         .catch(err => res.status(500).send(err));
//     res.redirect('/authors');
// }

module.exports = {
//     create,
     index
//     make,
//     show,
//     edit,
//     update,
//     destroy
 }