const worker = require('./worker-model')
const router = require('express').Router()
const  upload = require('../middleware/fileupload');
const checkAuth = require("../middleware/check-auth");
const checkonlyadminPermission = require("../middleware/check-onlyadminPermission");
router.post('/worker',checkAuth,checkonlyadminPermission, upload.single('image'), (req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  worker.create(req.body, (err, worker) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/worker', (req, res) => {
  worker.find(function (err, worker) {
    if (err)
      res.send(err)
    res.json(worker);
  });
})

router.put('/worker/:id', upload.single('image'),(req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  worker.findByIdAndUpdate(req.params.id, req.body, (err, worker) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
});

router.patch('/worker/:id',checkAuth,checkonlyadminPermission,upload.single('image'), (req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  worker.findByIdAndUpdate(req.params.id, req.body, (err, worker) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/worker/:id',checkAuth,checkonlyadminPermission, (req, res) => {
  worker.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
});

module.exports = router
