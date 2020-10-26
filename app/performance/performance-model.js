const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  annee: String,
  perf: String,
  place: String,
  date: String,
  type: String,
  athlete: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Athlete'
  }
})

module.exports = mongoose.model('performance', ExSchema)
