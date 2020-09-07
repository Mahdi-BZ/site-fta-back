const mongoose = require('mongoose');
const config = require('../config');

const Schema = mongoose.Schema;
const ExSchema = new Schema({
    Date: Date,
    Gouvernorat: String,
    club: String,
    adresse: String,
    codePostal: String,
    num_visa: String,
    date_visa: String,
    couleurs: String,
    CCP: String,
    Tel: String,
    Fax: String,
    pres_comitedirecteur: String,
    secretaire_comitedirecteur: String,
    tresorier_comitedirecteur: String,
    membres_comitedirecteur: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'membre_affiliation'
        }
    ],
    pres_sectionathlet: String,
    tresorier_sectionathlet: String,
    directeur_tech: String,
    membres_sectionathlet: String,
    entraineurs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'membre_affiliation'
        }
    ],
    nom_perschargee: String,
    adresse_perschargee: String,
});

module.exports = mongoose.model('demandeAffiliation', ExSchema);
