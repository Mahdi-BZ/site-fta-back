const demandeAffiliation = require('./demande-affiliation-model')
const router = require('express').Router()
const checkAuth = require("../middleware/check-auth");

router.post('/demandeAffiliation', (req, res) => {
    demandeAffiliation.create(req.query, (err, demandeAffiliation) => {
        if (err)
            res.send(err)
        res.json({'success': 'Created successfully'})
    })
})

router.get('/demandeAffiliation',checkAuth, (req, res) => {
    demandeAffiliation.find(function (err, demandeAffiliation) {
        if (err)
            res.send(err)
        res.json(demandeAffiliation);
    });
})

router.put('/demandeAffiliation/:id',checkAuth, (req, res) => {
    demandeAffiliation.findByIdAndUpdate(req.params.id, req.query, (err, demandeAffiliation) => {
        if (err) throw err;
        res.json({'success': 'Updated successfully'})
    });
})

router.patch('/demandeAffiliation/:id',checkAuth, (req, res) => {
    demandeAffiliation.findByIdAndUpdate(req.params.id, req.query, (err, demandeAffiliation) => {
        if (err) throw err;
        res.json({'success': 'Updated successfully'})
    });
})

router.delete('/demandeAffiliation/:id',checkAuth, (req, res) => {
    demandeAffiliation.remove({
        _id: req.params.id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({'success': 'Deleted successfully'})
    });
})

module.exports = router
