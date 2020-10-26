const evenement = require('./evenement-model')
const router = require('express').Router()

router.post('/evenement', (req, res) => {
  evenement.create(req.query, (err, evenement) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/evenement', (req, res) => {
  evenement.find(function (err, evenement) {
    if (err)
      res.send(err)
    res.json(evenement);
  });
})

router.put('/evenement/:id', (req, res) => {
  evenement.findByIdAndUpdate(req.params.id, req.query, (err, evenement) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/evenement/:id', (req, res) => {
  evenement.findByIdAndUpdate(req.params.id, req.query, (err, evenement) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/evenement/:id', (req, res) => {
  evenement.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
