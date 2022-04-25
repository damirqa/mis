const express = require('express')
const router = express.Router()
const StateController = require('../controllers/StateController')

router.post('/get-all', StateController.getStates)

module.exports = router