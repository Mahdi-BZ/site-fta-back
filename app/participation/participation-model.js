const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const participation = new Schema({
  dossard: { type: String, required: true },
  classement: { type: String, required: true },
  session: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Session',
          required: true
  },
   athlete: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Athlete',
            required: true
   },
})

module.exports = mongoose.model('Participation', participation)
