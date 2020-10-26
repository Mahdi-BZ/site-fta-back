const reglements_club = require('./reglements_club-model');
const router = require('express').Router();
const upload = require('../middleware/upload');



router.get('/reglements_club', (req, res) => {
  reglements_club.find(function (err, reglements_club) {
    if (err)
      res.send(err)
    res.json(reglements_club);
  });
})

router.put('/reglements_club/:id',upload, (req, res) => {
  reglements_club.findByIdAndUpdate(req.params.id, req.body, (err, reglements_club) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/reglements_club/:id',upload, (req, res) => {
  reglements_club.findByIdAndUpdate(req.params.id, req.body, (err, reglements_club) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/reglements_club/:id', (req, res) => {
  reglements_club.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
