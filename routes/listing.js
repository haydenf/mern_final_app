const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../database/models/Listing")
const Listing = mongoose.model("lisitings")

// Read listing api //
router.get("/", (req, res) =>{
    // finding the listing
    Listing.find()
        .then(listings => {console.log(listings);
            res.json(listings)})
        .catch(err => console.log(err))
        res.send("reading listing post success");
});

// create listing //
router.post("/", (req, res) => {
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
        res.send("post successfully posted to db");
});

// Editing listing by ID //

router.put("/", (req, res) => {
    // finding listing by id attached
    Listing.findById({_id: req.body._id})
    // checking if each = the other than saving changes to database
      .then(listing => {
        (listing.title = req.body.title), (listing.description = req.body.description);
        listing.save().then(listing => {
          res.json(listing);
        });
      })
      .catch(err => console.log("Editing error is"+err));
  });
  
  // Deleting the listing //
router.delete("/", (req, res) => {
    Listing.remove({_id: req.body._id})
      .then(() => {res.send("You've deleted the listing from db");})
      .catch(err => console.log("Error with deleting from db is" +err));
  });


  module.exports = router;