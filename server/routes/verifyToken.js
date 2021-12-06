const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
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

const verifyTokenAndAuthorization = (req, res, next) => {

    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res
            .status(403)
            .json('You have not access to that part')
        }
    })
}


module.export = { verifyToken, verifyTokenAndAuthorization }