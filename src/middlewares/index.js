const validationMiddleware = require("./validations")
const authMiddleware = require("./authenticator")

const middlewares = {
    validationMiddleware,
    authMiddleware
}



module.exports = middlewares;