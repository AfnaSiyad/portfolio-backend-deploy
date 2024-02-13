const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const contactSchema = new mongoose.Schema({
    fullname :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "Please enter a valid email!"],
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model("Contact", contactSchema);

