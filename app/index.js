const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use("/uploads", express.static("../uploads"));

app.use('/api', require('./example/router'));
app.use('/api', require('./reglements/router'));
app.use('/api', require('./reglements_championnat/router'));
app.use('/api', require('./reglements_club/router'));
app.use('/api', require('./minimas/router'));
app.use('/api', require('./benjamin/router'));
app.use('/api', require('./performance/router'));
app.use('/api', require('./categorie/router'));
app.use('/api', require('./form_formation/router'));
app.use('/api', require('./participant_formation/router'));
app.use('/api', require('./formation/router'));
app.use('/api', require('./palmares/router'));
app.use('/api', require('./documents/router'));
app.use('/api', require('./Club/router'));
app.use('/api', require('./Ligue/router'));
app.use('/api', require('./User/router'));
app.use('/api', require('./athlete/router'));
app.use('/api', require('./membre_commission/router'));
app.use('/api', require('./membre_affiliation/router'));
app.use('/api', require('./worker/router'));

app.use('/api', require('./example/router'));
app.use('/api', require('./competition/router'));
app.use('/api', require('./organisateur/router'));
app.use('/api', require('./organisation/router'));
app.use('/api', require('./session_comptition/router'));

module.exports = app;
