const TaskService = require('../services/TaskService')

class TaskController {
    async create(req, res, next) {
        try {
            const {task} = req.body
            const taskResponse = TaskService.create(task)
            res.sendStatus(200)
        }
        catch (e) {
            next(e)
        }
    }

    async getAllTasksState(req, res, next) {
        try {
            // console.log(req)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new TaskController()