

//showing a list of all users
async function index(req, res) {
    let users = await UserModel.find();
    res.send("user/index", { users });
}
