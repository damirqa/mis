const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/create', TaskController.create)
router.post('/state/all', TaskController.getAllTasksState)

module.exports = router