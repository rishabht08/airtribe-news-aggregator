const { checkIfEmailExists } = require("../utils/validations")
const users = require("../utils/users-sample")
const saltRounds = 10;
const {
    generateHashedPassword,
    compareHash
} = require("../utils/crypto-helpers")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const authHandler = {}

authHandler.registerUser = async (req, res) => {
    const { name, email, password , preferences = []} = req.body;
    if (checkIfEmailExists(users, email)) {
        return res.status(400).json({
            status: false,
            message: "Email ALready exists"
        })
    }

    const hash = generateHashedPassword(password);
    const user = {
        email,
        name,
        password: hash,
        preferences
    }

    users.push(user);
    return res.status(200).json({
        status: true,
        message: `user created with email ${email}`,
    })

}

authHandler.loginUser = async (req, res) => {

    const { name, email, password } = req.body;
    if (!checkIfEmailExists(users, email)) {
        return res.status(400).json({
            status: false,
            message: "Email Doesnot exist"
        })
    }
    const index = users.findIndex(user => {
        return user.email === email
    })

    const hashedPassword = users[index].password;
    if (!compareHash(password, hashedPassword)) {
        return res.status(401).json({
            status: false,
            message: "Wrong Password"
        })
    }

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: users[index]
    }, process.env.JWT_SECRET_KEY);

    return res.status(200).json({
        status: true,
        token
    })


}

module.exports = authHandler