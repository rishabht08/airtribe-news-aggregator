const express = require('express')

const aggregatorRouter = express.Router();

const authHandler = require("../handlers/auth.handler")
const preferenceHandler = require("../handlers/preference.handler")
const middlewares = require("../middlewares/index")

aggregatorRouter.post("/register" , middlewares.validationMiddleware , authHandler.registerUser)
aggregatorRouter.post("/login" ,middlewares.validationMiddleware, authHandler.loginUser)

aggregatorRouter.get("/preferences" ,middlewares.authMiddleware, preferenceHandler.getUserPreferences)
aggregatorRouter.put("/preferences" ,middlewares.authMiddleware, preferenceHandler.setUserPreferences)
aggregatorRouter.get("/news" ,middlewares.authMiddleware , preferenceHandler.getNews)


module.exports = aggregatorRouter