const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;
const ExSchema = new Schema({
    name: String,
    dateNaissance: Date,
    cin: String,
    tache: String,
    mobile: String,
    mobile2: String,
    email: String,
    image: String
});

module.exports = mongoose.model('worker', ExSchema)
