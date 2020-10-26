const demande_session = require('./demande_session-model')
const admin_permission = require('../middleware/admin_permission');
const admin_repres_permission = require('../middleware/admin_repres_ligue_perm');
const router = require('express').Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/demande_session', admin_repres_permission, (req, res) => {
  console.log(req.body);
  demande_session.create(req.body, (err, demande_session) => {
    if (err)
      res.send(err);
    res.json({ 'success': 'Created successfully' });
  });
})

router.get('/demande_session', admin_permission,  (req, res) => {
  demande_session.find(function (err, demande_session) {
    if (err)
      res.send(err)
    res.json(demande_session);
  });
})

router.put('/demande_session/:id', admin_permission,(req, res) => {
  demande_session.findByIdAndUpdate(req.params.id, req.body, (err, demande_session) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/demande_session/:id', admin_permission,(req, res) => {
  demande_session.findByIdAndUpdate(req.params.id, req.body, (err, demande_session) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/demande_session/:id', admin_permission, (req, res) => {
  demande_session.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
});

module.exports = router
