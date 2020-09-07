const ligue = require('./ligue-model');
const router = require('express').Router();
const upload = require('../middleware/fileupload');
const checkAuth = require("../middleware/check-auth");
const checkPermission = require('../middleware/check-permission');

router.post('/ligue',  upload.single('image'), (req, res) => {
    if ((req.file != null) && (req.file !== "")) {
        req.body.image = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
    }
    ligue.create(req.body, (err, ligue) => {
        if (err)
            res.send(err);
        res.json({'success': 'Created successfully'})
    })
});

router.get('/ligue', (req, res) => {
    ligue.find(function (err, ligue) {
        if (err)
            res.send(err)
        res.json(ligue);
    });
});

router.get('/ligue/:id', (req, res) => {
    ligue.findById(req.params.id, function (err, ligue) {
        if (err)
            res.send(err)
        res.json(ligue);
    });
});

router.put('/ligue/:id', checkAuth, checkPermission, upload.single('image'), (req, res) => {
    if ((req.file != null) && (req.file !== "")) {
        req.body.image = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
    }
    ligue.findByIdAndUpdate(req.params.id, req.body, (err, ligue) => {
        if (err) throw err;
        res.json({'success': 'Updated successfully'})
    });
});

router.patch('/ligue/:id', checkAuth, checkPermission,
upload.single('image'), (req, res) => {
    if (req.file.path !== null) {
        req.body.image = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
    }
    ligue.findByIdAndUpdate(req.params.id, req.body, (err, ligue) => {
        if (err) throw err;
        res.json({'success': 'Updated successfully'})
    });
}
)
;
router.delete('/ligue/:id', checkAuth, checkPermission, (req, res) => {
    ligue.remove({
        _id: req.params.id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({'success': 'Deleted successfully'})
    });
})

module.exports = router
