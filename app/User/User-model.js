const mongoose = require('mongoose')
const config = require('../config')
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const ExSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name : { type: String, required: true},
  password: { type: String, required: true },
  role : {type :String ,required: true}
});

ExSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', ExSchema)
