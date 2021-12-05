const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;
    if (authHeader) {
        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if (error) {
                return res
            .status(403)
            .json({ errorMessage: 'Token is not valid ' + error});

            req.user = user;
            next();
            }
        })

    } else {
        return res
            .status(401)
            .json({ errorMessage: 'You are not authenticated!'})
    }
}

const verifyTokenAndAutherization = () => {
    
}

module.export = { verifyToken }