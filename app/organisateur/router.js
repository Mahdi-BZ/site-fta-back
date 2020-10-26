const organisateur = require('./organisateur-model')
const router = require('express').Router()
const admin_permission = require('../middleware/admin_permission');

router.post('/organisateur', admin_permission, (req, res) => {
  organisateur.create(req.query, (err, organisateur) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/organisateur', (req, res) => {
  organisateur.find(function (err, organisateur) {
    if (err)
      res.send(err)
    res.json({organisateur});
  });
})

router.put('/organisateur/:id', admin_permission, (req, res) => {
  organisateur.findByIdAndUpdate(req.params.id, req.query, (err, organisateur) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/organisateur/:id', admin_permission,(req, res) => {
  organisateur.findByIdAndUpdate(req.params.id, req.query, (err, organisateur) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/organisateur/:id', admin_permission, (req, res) => {
  organisateur.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
