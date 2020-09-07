const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema;
const ExSchema = new Schema({
  name: String,
  email: String,
  commission: String,
  image : String
});

module.exports = mongoose.model('membre_commission', ExSchema);
