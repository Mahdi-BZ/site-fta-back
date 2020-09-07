const centre_de_formation = require('./centre_de_formation-model')
const router = require('express').Router()

router.post('/centre_de_formation', (req, res) => {
  centre_de_formation.create(req.query, (err, centre_de_formation) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/centre_de_formation', (req, res) => {
  centre_de_formation.find(function (err, centre_de_formation) {
    if (err)
      res.send(err)
    res.json(centre_de_formation);
  });
})

router.put('/centre_de_formation/:id', (req, res) => {
  centre_de_formation.findByIdAndUpdate(req.params.id, req.query, (err, centre_de_formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/centre_de_formation/:id', (req, res) => {
  centre_de_formation.findByIdAndUpdate(req.params.id, req.query, (err, centre_de_formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/centre_de_formation/:id', (req, res) => {
  centre_de_formation.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
