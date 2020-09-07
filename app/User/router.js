const User = require('./User-model');
const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/signup", (req, res, next) => {
    console.log(req.query);
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            role: req.body.role,
            email: req.body.email,
            password: hash,
            name: req.body.name
        });
        user
            .save()
            .then(result => {
                res.status(201).json({
                    message: "User created!",
                    result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });
});

router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign(
                {email: fetchedUser.email, userId: fetchedUser._id, role: fetchedUser.role},
                "secret_this_should_be_longer",
                {expiresIn: "1h"}
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Auth failed"
            });
        });
});
router.get('/users', (req, res) => {
    User.find(function (err, users) {
        if (err)
            res.send(err)
        res.json(users);
    });
})
router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) throw err;
        res.json({'success': 'Updated successfully'})
    });
});
module.exports = router
