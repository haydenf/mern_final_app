const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

UserSchema.plugin(require('mongoose-bcrypt'));
module.exports = UserSchema;
