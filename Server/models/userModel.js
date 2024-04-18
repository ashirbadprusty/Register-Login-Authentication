const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
       default: 'admin'
    },
    password:{
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema)
module.exports = User;