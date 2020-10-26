const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  eventPath : String,
  eventTitle :String,
  eventDate :String,
  eventComments :String,
  eventImgPath :String,
  eventDescrip :String,
})

module.exports = mongoose.model('evenement', ExSchema)
