const organisation = require('./organisation-model')
const router = require('express').Router()
const admin_permission = require('../middleware/admin_permission');

router.post('/organisation', admin_permission, (req, res) => {
  organisation.create(req.query, (err, organisation) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/organisation', (req, res) => {
  organisation.find(function (err, organisation) {
    if (err)
      res.send(err)
    res.json(organisation);
  });
})

router.put('/organisation/:id', admin_permission, (req, res) => {
  organisation.findByIdAndUpdate(req.params.id, req.query, (err, organisation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/organisation/:id', admin_permission, (req, res) => {
  organisation.findByIdAndUpdate(req.params.id, req.query, (err, organisation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/organisation/:id',admin_permission, (req, res) => {
  organisation.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
