const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  directeur: {type: String, required:true},
  téléphone: {type: String, required: true},
  formations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'formation'
    }
  ],
  athletes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'athlete'
    }
  ]
})

module.exports = mongoose.model('centre_de_formation', ExSchema)