const ApiError = require('../exceptions/ApiError')
const {Project, ProjectUsers} = require('../models')
const ProjectDto = require('../dto/projectDto')
const ProjectUsersService = require('./ProjectUsersService')
const StateService = require('./StateService')

class ProjectService {
    async create(name, type, description, owner) {
        if (!owner) throw ApiError.UnauthorizedError()
        if (!name || !type) throw ApiError.BadRequest('Name or type not filled in')

        const project = await Project.create({
            name: name,
            type: type,
            description: description,
            owner: owner
        })

        ProjectUsersService.addNewUserToProject(owner, project.id)

        const states = await StateService.createDefaultProjectStates(project.id)

        const projectDto = new ProjectDto(project)

        return {...projectDto}
    }

    async getLastProject(user_id) {
        if (!user_id) throw ApiError.UnauthorizedError()

        const userProjects = await ProjectUsers.findAll({
            where: {
                user_id
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })

        let project = null
        let projectDto = null

        if (userProjects.length) {
            project = await Project.findByPk(userProjects[0].project_id)
            projectDto = new ProjectDto(project)
        }

        return {...projectDto}
    }
}

module.exports = new ProjectService()