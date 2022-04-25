const ApiError = require('../exceptions/ApiError')
const {ProjectUsers} = require('../models')


class ProjectUsersService {
    addNewUserToProject(user_id, project_id) {
        if (!user_id) throw ApiError.UnauthorizedError()
        if (!project_id) throw ApiError.BadRequest('Project not found')

        const projectUser = ProjectUsers.create({
            user_id,
            project_id
        })

    }
}

module.exports = new ProjectUsersService()