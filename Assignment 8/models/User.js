const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"]
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter valid email'],
        immutable: true
        
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        //match: [, "Please use a strong password"],
        minLength: 8,
    }
})


module.exports = mongoose.model('user_auth_info', userSchema);