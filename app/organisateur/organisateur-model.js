const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema;
const ExSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  id_organisation: [{
    type: Schema.Types.ObjectID,
    ref: 'organisation'
  }]
});

module.exports = mongoose.model('organisateur', ExSchema)
