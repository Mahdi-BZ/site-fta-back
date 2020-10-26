const club = require('./club-model')
const router = require('express').Router()
const  upload = require('../middleware/fileupload');
const checkAuth = require("../middleware/check-auth");
const checkPermission = require("../middleware/check-permission");
router.post('/club',checkAuth,checkPermission, upload.single('image'),(req, res) => {
  if ((req.file != null) && (req.file !== "")){
    req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  club.create(req.body, (err, club) => {
    if (err)
      res.send(err);
    res.json({ 'success': 'Created successfully' })
  })
});

router.get('/club', (req, res) => {
  club.find(function (err, club) {
    if (err)
      res.send(err);
    res.json(club);
  });
});

router.get('/club/:id', (req, res) => {
  club.findById(req.params.id,function (err, club) {
    if (err)
      res.send(err)
    res.json(club);
  });
});

router.put('/club/:id',checkAuth,checkPermission,upload.single('image'), (req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  club.findByIdAndUpdate(req.params.id, req.body, (err, club) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/club/:id',checkAuth,checkPermission, upload.single('image'),(req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  club.findByIdAndUpdate(req.params.id, req.body, (err, club) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/club/:id',checkAuth,checkPermission, (req, res) => {
  club.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
});


module.exports = router
