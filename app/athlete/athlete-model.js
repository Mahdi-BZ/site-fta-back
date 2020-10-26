const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;
const athlete = new Schema({
    numero: {type: String},
    image: {type: String},
  nom: { type: String},
  prenom: { type: String },
  sexe: { type: String },
  ddn: { type: Date },
  lieu: { type: String},
  club: { type: String },
  clubetranger: { type: String},
  discipline1: { type: String },
  discipline2: { type: String },
  meilleurPerfo1: { type: String  },
  meilleurPerfo2: { type: String },
  classe: { type: String},
  etablissement: { type: String},
  encadreurtech: { type: String },
  Npasseport: { type: String },
  validité: {type: String},
  telephone: {type: String},
  adremail: { type: String },
  adresse: { type: String  },
  pointure: { type: String  },
  perfo: { type: String },
  categorie: { type: String  },
  participation:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Participation',

      }
  ],
   id_club: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',

   },
    image : { type: String, },
    performance:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'performance',
        }
    ]
});

module.exports = mongoose.model('Athlete', athlete);
