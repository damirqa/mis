const StateService = require('../services/StateService')

class StateController {
    async getStates(req, res, next) {
        try {
            const {project_id} = req.body
            const states = await StateService.getProjectStates(project_id)
            res.json(states)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new StateController()