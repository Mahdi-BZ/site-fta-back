const membre_commission = require('./membre_commission-model')
const router = require('express').Router()
const  upload = require('../middleware/fileupload');
const checkAuth = require("../middleware/check-auth");
const checkonlyadminPermission = require("../middleware/check-onlyadminPermission");


router.post('/membre_commission',checkAuth,checkonlyadminPermission, upload.single('image'),(req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  membre_commission.create(req.body, (err, membre_commission) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/membre_commission', (req, res) => {
  membre_commission.find(function (err, membre_commission) {
    if (err)
      res.send(err)
    res.json(membre_commission);
  });
})

router.get('/membre_commission/:id', (req, res) => {
  membre_commission.findById(req.params.id,function (err, membre_commission) {
    if (err)
      res.send(err);
    res.json(membre_commission);
  });
})

router.put('/membre_commission/:id',checkAuth,checkonlyadminPermission,upload.single('image'), (req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  membre_commission.findByIdAndUpdate(req.params.id, req.body, (err, membre_commission) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/membre_commission/:id',checkAuth,checkonlyadminPermission,upload.single('image'), (req, res) => {
  if ((req.file != null) && (req.file !== "")){req.body.image = req.protocol + "://" + req.get("host")  + "/uploads/" + req.file.filename;}
  membre_commission.findByIdAndUpdate(req.params.id, req.body, (err, membre_commission) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/membre_commission/:id',checkAuth,checkonlyadminPermission, (req, res) => {
  membre_commission.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
