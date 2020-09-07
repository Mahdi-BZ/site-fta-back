const palmares = require('./palmares-model')
const router = require('express').Router()

router.post('/palmares', (req, res) => {
  palmares.create(req.body, (err, palmares) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/palmares', (req, res) => {
  palmares.find(function (err, palmares) {
    if (err)
      res.send(err)
    res.json(palmares);
  });
})

router.put('/palmares/:id', (req, res) => {
  palmares.findByIdAndUpdate(req.params.id, req.body, (err, palmares) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/palmares/:id', (req, res) => {
  palmares.findByIdAndUpdate(req.params.id, req.body, (err, palmares) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/palmares/:id', (req, res) => {
  palmares.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
