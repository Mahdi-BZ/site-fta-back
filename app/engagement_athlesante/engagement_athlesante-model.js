const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  description: String,
  programme: String,
  relationSS: String
})

module.exports = mongoose.model('engagement_athlesante', ExSchema)
