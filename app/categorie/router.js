const categorie = require('./categorie-model');
const router = require('express').Router();
const upload = require('../middleware/upload');


router.get('/categorie', (req, res) => {
  categorie.find(function (err, categorie) {
    if (err)
      res.send(err)
    res.json(categorie);
  });
})

router.put('/categorie/:id', upload, (req, res) => {
  categorie.findByIdAndUpdate(req.params.id, req.body, (err, categorie) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/categorie/:id', upload, (req, res) => {
  categorie.findByIdAndUpdate(req.params.id, req.body, (err, categorie) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})


module.exports = router;
