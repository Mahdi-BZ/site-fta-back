const jwt = require("jsonwebtoken");
const User = require("../User/User-model");


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
        req.userData = { email: decodedToken.email, userId: decodedToken.userId, role: decodedToken.role};
        const id= req.body.id_ligue;
        User.findOne({ligue: id}, (err, user) => {
            if (err)
                res.send(err);
            req.currentUser=JSON.parse(JSON.stringify(user))._id;
            console.log(req.currentUser);
            if ( req.userData.role === "admin" || req.userData.userId === req.currentUser) {
                console.log("permission accorded");
                next();
            }
            else
            {
                console.log("permession denied");
                res.status(401).json({message: "permession denied"})
            }
        });
        console.log("after findone req.current user " + req.currentUser);


    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};
