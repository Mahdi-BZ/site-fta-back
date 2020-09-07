const reglements = require('./reglements-model');
const router = require('express').Router();
const upload = require('../middleware/upload');



router.get('/reglements', (req, res) => {
  reglements.find(function (err, reglements) {
    if (err)
      res.send(err)
    res.json(reglements);
  });
})

router.put('/reglements/:id', upload, (req, res) => {
  reglements.findByIdAndUpdate(req.params.id, req.body, (err, reglements) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/reglements/:id', upload, (req, res) => {
  reglements.findByIdAndUpdate(req.params.id, req.body, (err, reglements) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/reglements/:id', (req, res) => {
  reglements.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
