const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;
const session = new Schema({

    id_comp: {
      type: Schema.Types.ObjectID,
      ref: 'competition'
    },
  name: { type: String, required: true},
  date_debut: { type: Date, required: true },
  date_fin: { type: Date, required: true },
  lieu: { type: String, required: true },
  annee_sportive: { type: String, required: true },
  participation:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Participation'
    },
  ],
   organisation: {
      type: mongoose.Schema.Types.ObjectId,
       ref: 'organisation'
   },
});

module.exports = mongoose.model('Session', session);
