const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Firstname: {
        type: String,
        required: true,
    },
    Lastname: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: String,  
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Form", UserSchema);
