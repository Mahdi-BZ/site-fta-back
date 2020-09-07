const formation = require('./formation-model')
const router = require('express').Router()

router.post('/formation', (req, res) => {
  formation.create(req.body, (err, formation) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/formation', (req, res) => {
  formation.find(function (err, formation) {
    if (err)
      res.send(err)
    res.json(formation);
  });
})

router.put('/formation/:id', (req, res) => {
  formation.findByIdAndUpdate(req.params.id, req.body, (err, formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/formation/:id', (req, res) => {
  formation.findByIdAndUpdate(req.params.id, req.body, (err, formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/formation/:id', (req, res) => {
  formation.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
