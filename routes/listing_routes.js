const express = require("express");
const router = express.Router();
const ListingController = require("./../controllers/listing_controller");

router.get("/", ListingController.index);

router.post("/", ListingController.create);

router.get("/new", ListingController.make);

router.get("/", ListingController.show);

router.get("/", ListingController.edit);

router.put("/", ListingController.update);

router.delete("/", ListingController.destroy);
router.get("/getuser", ListingController.getUser);

module.exports = router;
