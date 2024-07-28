const express = require('express')

const router = express.Router();
const aggregatorRouter = require("./aggregator.routes")

router.use("/users" , aggregatorRouter);

module.exports = router;
