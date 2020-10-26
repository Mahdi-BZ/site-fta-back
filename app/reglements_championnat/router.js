const reglements_championnat = require('./reglements_championnat-model');
const router = require('express').Router();
const upload = require('../middleware/upload');
const supp = require('../middleware/delete');


router.post('/reglements_championnat', upload, (req, res) => {
  reglements_championnat.create(req.body, (err, reglements_championnat) => {
    if (err)
      res.send(err)
    res.send({ 'success': 'Created successfully' })
  })
})

router.get('/reglements_championnat', (req, res) => {
  reglements_championnat.find(function (err, reglements_championnat) {
    if (err)
      res.send(err);
    res.json(reglements_championnat);
  });
})

router.put('/reglements_championnat/:id', upload, (req, res) => {
  reglements_championnat.findByIdAndUpdate(req.params.id, req.body, (err, reglements_championnat) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/reglements_championnat/:id',upload, (req, res) => {
  reglements_championnat.findByIdAndUpdate(req.params.id, req.body, (err, reglements_championnat) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/reglements_championnat/:id/:file', supp , (req, res) => {
  reglements_championnat.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    console.log('out supp');
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
