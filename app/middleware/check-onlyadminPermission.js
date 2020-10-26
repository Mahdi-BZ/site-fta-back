

module.exports = (req, res, next) => {
    try {
        if (req.userData.role === null || req.userData.role===""){
            return  res.status(401).json({message: "Not authorized"});
        }

        if (req.userData.role === 'admin'){
            next();
            return ;
        }

        return  res.status(401).json({message: "Not authorized"});

    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};

