const participant_formation = require('./participant_formation-model')
const router = require('express').Router()

router.post('/participant_formation', (req, res) => {
  participant_formation.create(req.body, (err, participant_formation) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/participant_formation', (req, res) => {
  participant_formation.find(function (err, participant_formation) {
    if (err)
      res.send(err)
    res.json(participant_formation);
  });
})

router.put('/participant_formation/:id', (req, res) => {
  participant_formation.findByIdAndUpdate(req.params.id, req.body, (err, participant_formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/participant_formation/:id', (req, res) => {
  participant_formation.findByIdAndUpdate(req.params.id, req.body, (err, participant_formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/participant_formation/:id', (req, res) => {
  participant_formation.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
