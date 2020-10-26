const performance = require('./performance-model')
const router = require('express').Router()

router.post('/performance', (req, res) => {
  performance.create(req.body, (err, performance) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/performance', (req, res) => {
  performance.find(function (err, performance) {
    if (err)
      res.send(err)
    res.json(performance);
  });
})

router.put('/performance/:id', (req, res) => {
  performance.findByIdAndUpdate(req.params.id, req.body, (err, performance) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/performance/:id', (req, res) => {
  performance.findByIdAndUpdate(req.params.id, req.body, (err, performance) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/performance/:id', (req, res) => {
  performance.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
