const ProjectService = require('../services/ProjectService')

class ProjectController {

    async create(req, res, next) {
        try {
            const {name, type, description, owner} = req.body
            const projectData = await ProjectService.create(name, type, description, owner)
            return res.json(projectData)
        }
        catch (e) {
            next(e)
        }
    }

    async getLastProject(req, res, next) {
        try {
            const {id} = req.body
            const projectData = await ProjectService.getLastProject(id)
            return res.json(projectData)
        }
        catch (e) {
            next(e)
        }
    }

}

module.exports = new ProjectController()