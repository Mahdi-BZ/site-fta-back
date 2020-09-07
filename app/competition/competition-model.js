const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema;


const CompetitionSchema = new Schema({
  name: String,
  type: String,
  image: String,
  file_name: String,
  id_sessions: [
    {
      type: Schema.Types.ObjectID,
      ref: 'Session'
    }
  ]
});


module.exports = mongoose.model('competition', CompetitionSchema);

