const engagement_athlesante = require('./engagement_athlesante-model')
const router = require('express').Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/engagement_athlesante', (req, res) => {
  engagement_athlesante.create(req.body, (err, engagement_athlesante) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/engagement_athlesante', (req, res) => {
  engagement_athlesante.find(function (err, engagement_athlesante) {
    if (err)
      res.send(err)
    res.json(engagement_athlesante);
  });
})

router.put('/engagement_athlesante/:id', (req, res) => {
  engagement_athlesante.findByIdAndUpdate(req.params.id, req.body, (err, engagement_athlesante) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/engagement_athlesante/:id', (req, res) => {
  engagement_athlesante.findByIdAndUpdate(req.params.id, req.body, (err, engagement_athlesante) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/engagement_athlesante/:id', (req, res) => {
  engagement_athlesante.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
