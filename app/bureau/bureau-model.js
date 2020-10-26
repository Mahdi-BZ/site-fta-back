const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  membres : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Worker'
    }
  ]
})

module.exports = mongoose.model('bureau', ExSchema)
