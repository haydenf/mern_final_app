const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

  module.exports = ListingSchema;