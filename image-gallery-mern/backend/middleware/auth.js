const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
    const token = req.headers['x-auth-token']
    if (!token) {
        return res.json({ error: 'No token ,authorization denied' })
    }

    const decode = jwt.verify(token, process.env.JWTSECRET);
    req.user = decode.user


    next()
}