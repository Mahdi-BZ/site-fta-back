const app = require('./index');
const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://raed:fta@cluster0-plwca.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(config.express.port, config.express.ip, function (error) {
    console.log('express is listening on http://' +
        config.express.ip + ':' + config.express.port)
});
