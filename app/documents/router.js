const documents = require('./documents-model');
const router = require('express').Router();
const  upload = require('../middleware/fileupload');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('_');
    cb(null, name);
  }
})

router.post('/documents', multer({storage: storage}).single('file'), (req, res) => {
  documents.create(req.body, (err, documents) => {
    if (err)
      res.send(err);
    console.log(documents);
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/documents', (req, res) => {
  documents.find(function (err, documents) {
    if (err)
      res.send(err)
    res.json(documents);
  });
})

router.put('/documents/:id', (req, res) => {
  documents.findByIdAndUpdate(req.params.id, req.body, (err, documents) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/documents/:id', (req, res) => {
  documents.findByIdAndUpdate(req.params.id, req.body, (err, documents) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/documents/:id', (req, res) => {
  documents.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
