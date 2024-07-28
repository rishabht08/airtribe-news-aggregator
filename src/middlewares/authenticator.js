const jwt = require('jsonwebtoken');
const users = require("../utils/users-sample")
require('dotenv').config()

const checkAuthentication = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            message: 'Unauthorised'
        })
    }

    if (authorization && authorization.startsWith('Bearer ')) {
        const token = authorization.slice(7);
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            if (!decoded || !decoded.data) return res.status(401).send('Authorization header missing or invalid');
            const { data } = decoded;
            const index = users.findIndex(user => {
                return user.email === data.email
            })
            req.user = users[index];
        } catch (error) {
            return res.status(401).send('Authorization header missing or invalid');
        }
    } else {
        return res.status(401).send('Authorization header missing or invalid');
    }

    next();
}

module.exports = checkAuthentication;