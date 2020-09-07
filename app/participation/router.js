const participation = require('./participation-model')
const router = require('express').Router()

router.post('/participation', (req, res) => {
  participation.create(req.query, (err, participation) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/participation', (req, res) => {
  participation.find(function (err, participation) {
    if (err)
      res.send(err)
    res.json(participation);
  });
})

router.put('/participation/:id', (req, res) => {
  participation.findByIdAndUpdate(req.params.id, req.query, (err, participation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/participation/:id', (req, res) => {
  participation.findByIdAndUpdate(req.params.id, req.query, (err, participation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/participation/:id', (req, res) => {
  participation.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
