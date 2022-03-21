const express = require('express')
const router = express.Router();

const authenticationRouter = require('./AuthenticationRouter')

router.use('/auth', authenticationRouter)

module.exports = router