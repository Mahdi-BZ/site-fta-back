const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema
const ExSchema = new Schema({
    annee: String,
    competitionName: String,
    type: String,
    performance: String,
    date: String,
    lieu: String,
    athlete: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Athlete'
    }
})

module.exports = mongoose.model('palmares', ExSchema)
