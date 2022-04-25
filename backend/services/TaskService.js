const TaskDto = require('../dto/taskDto')
const {Task} = require('../models')

class TaskService {
    async create(data) {
        const task = Task.create({
            stateId: data.stateId,
            title: data.title,
            owner: data.owner
        })

        // const taskDto = new TaskDto(task)
        //
        // return taskDto
    }
}

module.exports = new TaskService()