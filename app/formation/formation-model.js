const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  date_formation: {type: Date, required:true},
  name: String,
  nature: String,
  lieu: String,
  nombreParticipant: Number,
  organisme: String,
  communique: String,
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'participant_formation'
    }
  ],
  centres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'centre_de_formation'
    }
  ]
})

module.exports = mongoose.model('formation', ExSchema)
