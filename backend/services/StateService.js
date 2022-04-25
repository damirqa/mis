const {State, Task} = require('../models')
const StateDto = require('../dto/stateDto')
const TaskDto = require('../dto/taskDto')

class StateService {
    async createDefaultProjectStates(project_id) {
        const backlog = await State.create({
            name: 'Backlog',
            serial_number: 1,
            project_id,
            active: true
        })

        const inWork = await State.create({
            name: 'In work',
            serial_number: 2,
            project_id,
            active: true
        })

        const ready = await State.create({
            name: 'Ready',
            serial_number: 3,
            project_id,
            active: true
        })

        const backlogDto = new StateDto(backlog)
        const inWorkDto = new StateDto(inWork)
        const readyDto = new StateDto(ready)

        return {...backlogDto, inWorkDto, readyDto}
    }

    async getProjectStates(project_id) {
        const states = await State.findAll({
            where: {
                project_id
            },
            order: [
                ['serial_number', 'ASC']
            ]
        })

        let statesDto = []

        await Promise.all(
            states.map(async state => {
                const tasks = await state.getTasks()
                const tasksDto = []

                tasks.map(task => {
                    const taskDto = new TaskDto(task)
                    tasksDto.push(taskDto)
                })

                const stateDto = new StateDto(state)
                stateDto.tasks = tasksDto
                statesDto.push(stateDto)
            })
        )


        statesDto.sort(function (s1, s2) {
            if (s1.serial_number > s2.serial_number) return 1
            if (s1.serial_number < s2.serial_number) return -1
            return 0
        })
        return statesDto
    }
}

module.exports = new StateService()