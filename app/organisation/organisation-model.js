const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  id_SComp:{
    type: Schema.Types.ObjectID,
    ref: 'session_competition'
  },
  id_Org: [{
    type: Schema.Types.ObjectID,
    ref: 'organisateur'
  }]
})

module.exports = mongoose.model('organisation', ExSchema)
