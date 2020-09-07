const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  name: String,
  mobile: String,
  adresse: String,
})

module.exports = mongoose.model('membre_affiliation', ExSchema)
