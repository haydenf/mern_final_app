const express = require("express");
const router = express.Router();
const ListingController = require("./../controllers/listing_controller");

router.get("/", ListingController.index);

router.post("/", ListingController.create);

router.get("/new", ListingController.make);

router.get("/:id", ListingController.show);

router.get("/edit/:id", ListingController.edit);

router.put("/:id", ListingController.update);

router.delete("/:id", ListingController.destroy);

module.exports = router;
