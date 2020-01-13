const express = require("express");
const router = express.Router();
const ListingController = require("./../controllers/listing_controller");

router.get("/listings", ListingController.index);

router.post("/listings", ListingController.create);

router.get("/listings/new", ListingController.make);

router.get("/listings/:id", ListingController.show);

router.get("/listings/edit/:id", ListingController.edit);

router.put("/listings/:id", ListingController.update);

router.delete("/listings/:id", ListingController.destroy);

module.exports = router;
