const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  name: {type: String, required: true},
  date_session: {type: String},
  lieu: {type: String},
  annee_sportive: {type: String, required: true},
  id_ligue: {
    type: Schema.Types.ObjectID,
    ref: 'ligue'
  }
});

module.exports = mongoose.model('demande_session', ExSchema)
