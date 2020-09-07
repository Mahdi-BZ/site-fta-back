const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;
const ExSchema = new Schema({
  gouvernorat : {type : String },
  gouvernoratFR : {type : String },
  name  : {type : String  },
  president_secretaireGenerale  : {type : String },
  president_sect_athletisme  : {type : String   },
  adresse : {type : String   },
  mobileClub : {type : String   },
  faxClub : {type : String  },
  affiliated : {type : Boolean},
  ligue : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'ligue'
  },
  athletes : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Athlete'
    }
  ],
  organisateur : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'organisateur'
  },
  image : String
});

module.exports = mongoose.model('club', ExSchema);
