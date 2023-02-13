const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Fullname is Required'],
  },
  email: {
   
    type: String,
    required: [true, 'Email is Required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone No is Required'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is Required'],
  },
});

module.exports = mongoose.model("Contacts", contactSchema)