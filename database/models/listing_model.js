const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ListingSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true
  },
  image: {
      type: String
  },
  
});
mongoose.model("listings", ListingSchema);
