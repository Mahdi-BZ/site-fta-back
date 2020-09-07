const form_formation = require('./form_formation-model')
const router = require('express').Router()
const admin_permission = require('../middleware/admin_permission');

router.post('/form_formation', (req, res) => {
  form_formation.create(req.body, (err, form_formation) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/form_formation', (req, res) => {
  form_formation.find(function (err, form_formation) {
    if (err)
      res.send(err)
    res.json(form_formation);
  });
})

router.put('/form_formation/:id', admin_permission,(req, res) => {
  form_formation.findByIdAndUpdate(req.params.id, req.body, (err, form_formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/form_formation/:id', admin_permission, (req, res) => {
  form_formation.findByIdAndUpdate(req.params.id, req.body, (err, form_formation) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/form_formation/:id', admin_permission, (req, res) => {
  form_formation.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
