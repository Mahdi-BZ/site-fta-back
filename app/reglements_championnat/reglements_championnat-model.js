const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  name: String,
  championnatName: String
});

module.exports = mongoose.model('reglements_championnat', ExSchema)
