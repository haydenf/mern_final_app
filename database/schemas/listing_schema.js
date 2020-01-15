const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
      type: String,
      required: true 
    },
    blurb: {
      type: String,
      required: true 
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    image: {
        type: String
    },
<<<<<<< HEAD
    owner: {
      type: String
=======
    productOwner: {
      type: Schema.Types.ObjectId,
      ref: "users"
>>>>>>> ecdb24d100be9c73f9552e3cd2cd679e7e8efb5f
    }
  });

  module.exports = ListingSchema;