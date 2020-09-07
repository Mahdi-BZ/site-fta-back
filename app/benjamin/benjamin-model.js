const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  name: String
});

module.exports = mongoose.model('benjamin', ExSchema)
