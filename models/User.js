const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  givenName: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  houseNumber: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    trim: true,
  },
  suburb: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  postcode: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;