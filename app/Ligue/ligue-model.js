const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
  gouvernorat : {type : String },
  name : {type : String },
  email : {type : String },
  president: {type : String },
  siege_social_ligue : {type : String  },
  mobile : {type : String  },
  fax : {type : String  },
  clubs : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'club'
    }
  ],
  image : String,
  responsable : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
})

module.exports = mongoose.model('ligue', ExSchema)
