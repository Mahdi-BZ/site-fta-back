const example = require('./example-model');
const router = require('express').Router();

router.post('/example', (req, res) => {
  example.create(req.query, (err, example) => {
    if (err)
      res.send(err);
    res.json({ 'success': 'Created successfully' })
  })
});

router.get('/example', (req, res) => {
  example.find(function (err, example) {
    if (err)
      res.send(err);
    res.json(example);
  });
});

router.put('/example/:id', (req, res) => {
  example.findByIdAndUpdate(req.params.id, req.query, (err, example) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
});

router.patch('/example/:id', (req, res) => {
  example.findByIdAndUpdate(req.params.id, req.query, (err, example) => {
    if (err) throw err;
    res.json({ 'success': 'Updated successfully' })
  });
});

router.delete('/example/:id', (req, res) => {
  example.remove({
    _id: req.params.id
  }, function (err) {
    if (err)
      res.send(err);
    res.json({ 'success': 'Deleted successfully' })
  });
});

module.exports = router;
