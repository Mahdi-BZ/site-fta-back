const session_comptition = require('./session_comptition-model')
const router = require('express').Router()

router.post('/session_comptition', (req, res) => {
  session_comptition.create(req.body, (err, session_comptition) => {
    if (err)
      res.send(err)
    res.json({ 'success': 'Created successfully' })
  })
});

router.get('/session_comptition', (req, res) => {
  session_comptition.find(function (err, session_comptition) {
    if (err)
      res.send(err)
    res.json(session_comptition);
  });
})

router.put('/session_comptition/:id', (req, res) => {
  session_comptition.findByIdAndUpdate(req.params.id, req.body, (err, session_comptition) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.patch('/session_comptition/:id', (req, res) => {
  session_comptition.findByIdAndUpdate(req.params.id, req.body, (err, session_comptition) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
})

router.delete('/session_comptition/:id', (req, res) => {
  session_comptition.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
})

module.exports = router
