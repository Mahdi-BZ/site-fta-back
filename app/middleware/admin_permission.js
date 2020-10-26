const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
        req.userData = { email: decodedToken.email, userId: decodedToken.userId, role: decodedToken.role};
        if ( req.userData.role === "admin") {
            console.log("permission accorded");
            next();
        }
        else
        {
            console.log("permession denied");
            res.status(401).json({message: "permession denied"})
        }

    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};
