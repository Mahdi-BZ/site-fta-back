const mongoose = require('mongoose')
const config = require('../config')


const Schema = mongoose.Schema
const ExSchema = new Schema({

  name: String,
  date_naissance: String,
  genre: String,
  cin: String,
  club: String,
  equipe_nationale: String,
  equipe_entraineur: String,
  email: String,
  tele: String,
  formation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'formation'
  }
})

module.exports = mongoose.model('form_formation', ExSchema)
