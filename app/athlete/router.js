const athlete = require('./athlete-model');
const router = require('express').Router();
const checkAuth = require("../middleware/check-auth");
const  upload = require('../middleware/fileupload');


router.post('/athlete', upload.single('file'),
    (req, res) => {
      if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  athlete.create(req.body, (err, athlete) => {
    if (err)
      res.send(err);
    res.json({ 'success': 'Created successfully' })
  })
});

router.get('/athlete', (req, res) => {
  athlete.find(function (err, athlete) {
    if (err)
      res.send(err);
    res.json(athlete);
  });
});

router.put('/athlete/:id',
    upload.single('file'),
    (req, res) => {
      if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  athlete.findByIdAndUpdate(req.params.id, req.body, (err, athlete) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
});

router.patch('/athlete/:id',
    checkAuth,upload.single('file'),
    (req, res) => {
      if ((req.file != null) && (req.file !== "")){
        req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  athlete.findByIdAndUpdate(req.params.id, req.body, (err, athlete) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
});

router.delete('/athlete/:id',

    (req, res) => {
  athlete.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
});
module.exports = router;
