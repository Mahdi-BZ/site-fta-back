const benjamin = require('./benjamin-model');
const router = require('express').Router();
const upload = require('../middleware/upload');


router.get('/benjamin', (req, res) => {
  benjamin.find(function (err, benjamin) {
    if (err)
      res.send(err)
    res.json(benjamin);
  });
})

router.put('/benjamin/:id', upload, (req, res) => {
  benjamin.findByIdAndUpdate(req.params.id, req.body, (err, benjamin) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/benjamin/:id', upload, (req, res) => {
  benjamin.findByIdAndUpdate(req.params.id, req.body, (err, benjamin) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})


module.exports = router
