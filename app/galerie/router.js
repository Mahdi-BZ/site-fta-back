const galerie = require('./galerie-model')
const router = require('express').Router()

router.post('/galerie', (req, res) => {
  galerie.create(req.body, (err, galerie) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/galerie', (req, res) => {
  galerie.find(function (err, galerie) {
    if (err)
      res.send(err)
    res.json(galerie);
  });
})

router.put('/galerie/:id', (req, res) => {
  galerie.findByIdAndUpdate(req.params.id, req.body, (err, galerie) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/galerie/:id', (req, res) => {
  galerie.findByIdAndUpdate(req.params.id, req.body, (err, galerie) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/galerie/:id', (req, res) => {
  galerie.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
