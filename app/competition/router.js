const competition = require('./competition-model');
const router = require('express').Router();
const bodyParser = require('body-parser');
const upload = require('../middleware/upload');
const uploadImage = require('../middleware/upload');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const admin_permission = require('../middleware/admin_permission');

router.post('/competition',admin_permission, uploadImage, (req, res) => {
  competition.create( req.body, (err, competition) => {
    console.log(req.body);
    if (err)
      res.send(err);
    res.json({'success': 'Created successfully'});
  });
});

router.get('/competition', (req, res) => {
  competition.find(function (err, competition) {
    if (err)
      res.send(err);
    res.json(competition);
  });
});

router.put('/competition/:id',  uploadImage,(req, res) => {
  competition.findByIdAndUpdate(req.params.id, req.body, (err, competition) => {
    if (err) throw err;
    console.log(req.body);
    res.json({ 'success': 'Updated successfully' });
  });
});

router.patch('/competition/:id', admin_permission, uploadImage, (req, res) => {
  competition.findByIdAndUpdate(req.params.id, req.query, (err, competition) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/competition/:id', admin_permission,(req, res) => {
  competition.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
});

module.exports = router;
