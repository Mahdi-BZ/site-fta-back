const minimas = require('./minimas-model');
const router = require('express').Router();
const upload = require('../middleware/upload');



router.get('/minimas', (req, res) => {
  minimas.find(function (err, minimas) {
    if (err)
      res.send(err)
    res.json(minimas);
  });
})

router.put('/minimas/:id', upload, (req, res) => {
  minimas.findByIdAndUpdate(req.params.id, req.body, (err, minimas) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/minimas/:id', upload, (req, res) => {
  minimas.findByIdAndUpdate(req.params.id, req.body, (err, minimas) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/minimas/:id', (req, res) => {
  minimas.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
