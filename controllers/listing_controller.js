const mongoose = require("mongoose");
const ListingModel = require("../database/models/listing_model");
require("../database/models/listing_model")
const Listing = mongoose.model("listings")


//showing a list of all listings
async function index(req, res) {
    Listing.find()
        .then(listings => {console.log(listings);
            res.json(listings)})
        .catch(err => console.log(err))
}

//shows form to make new listing
function make(req, res) {
    res.render("CreateListingView");
}

//create and save to db a new listing
async function create(req, res) {
    let newListing = {title: req.body.title,
        description: req.body.description};
    // saving the listing to the database and logging
    new Listing(newListing)
        .save()
        .then(listing => {
            res.json(listing)
            console.log("logging creation of" + listing)
        })
        .catch(err => console.log("Logging the error on save listing is" +err))
};

const show = async (req, res) => {
    let { id } = req.params
    let listing = await ListingModel.findById(id)
        .then(listings => {console.log(listings);
            res.json(listings)})
        .catch(err => res.status(500).send(err))
    res.render("listing/show", {listing});
}

const edit = async (req, res) => {
    let { id } = req.params
    let listing = await ListingModel.findById(id)
        .catch(err => res.status(500).send(err))
    res.render("listing/edit", {listing});
}

const update = async (req, res) => {
    let { id } = req.params
    let { title, description, image } = req.body
    await ListingModel.findByIdAndUpdate(id, {title, description, image})
        .catch(err => res.status(500).send(err));
    res.redirect(`/listing/${id}`)
}

const destroy = async (req, res) => {
    let { id } = req.params
    await ListingModel.findByIdAndDelete(id)
        .catch(err => res.status(500).send(err));
    res.redirect('/listing');
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