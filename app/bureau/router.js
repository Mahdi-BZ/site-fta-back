const bureau = require('./bureau-model')
const router = require('express').Router()
const checkAuth = require("../middleware/check-auth");
const checkonlyadminPermission = require("../middleware/check-onlyadminPermission")
router.post('/bureau',checkAuth ,checkonlyadminPermission, (req, res) => {

  bureau.create(req.body, (err, bureau) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
})

router.get('/bureau', (req, res) => {
  bureau.find(function (err, bureau) {
    if (err)
      res.send(err)
    res.json(bureau);
  });
})

router.put('/bureau/:id',checkAuth,checkonlyadminPermission, (req, res) => {
  bureau.findByIdAndUpdate(req.params.id, req.body, (err, bureau) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/bureau/:id',checkAuth,checkonlyadminPermission, (req, res) => {
  bureau.findByIdAndUpdate(req.params.id, req.body, (err, bureau) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/bureau/:id',checkAuth,checkonlyadminPermission, (req, res) => {
  bureau.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
