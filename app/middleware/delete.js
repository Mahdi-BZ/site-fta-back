const fs = require('fs');
const reglements_championnat = require('../reglements_championnat/reglements_championnat-model');



module.exports = (req, res, next) => {
    reglements_championnat.find(function (err, reglements_championnat) {
        const path = './uploads/' + req.params.file;
        console.log(path);
        try {
            fs.unlinkSync(path)
            //file removed
        } catch(err) {
            console.error(err)
        }
        console.log('ended fs');
        next()
    })
}

