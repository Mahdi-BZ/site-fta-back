const membre_affiliation = require('./membre_affiliation-model')
const router = require('express').Router()
const checkAuth = require("../middleware/check-auth");

router.post('/membre_affiliation',checkAuth, (req, res) => {
  membre_affiliation.create(req.body, (err, membre_affiliation) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/membre_affiliation', (req, res) => {
  membre_affiliation.find(function (err, membre_affiliation) {
    if (err)
      res.send(err)
    res.json(membre_affiliation);
  });
})

router.put('/membre_affiliation/:id',checkAuth, (req, res) => {
  membre_affiliation.findByIdAndUpdate(req.params.id, req.body, (err, membre_affiliation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/membre_affiliation/:id',checkAuth, (req, res) => {
  membre_affiliation.findByIdAndUpdate(req.params.id, req.body, (err, membre_affiliation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/membre_affiliation/:id',checkAuth, (req, res) => {
  membre_affiliation.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
