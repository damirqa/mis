const express = require('express')
const router = express.Router()
const ProjectController = require('../controllers/ProjectController')
const {Project, ProjectUsers, ProjectTypes} = require('../models/index')

router.post('/all', async (req, res) => {
    const {user_id} = req.body

    const projects_user = await ProjectUsers.findAll({where: {user_id}})
    .then(async project => {
        return Project.findByPk(project.project_id)
    })

    return res.json({projects: projects_user})
})

router.post('/create', ProjectController.create)

router.post('/get-last-project', ProjectController.getLastProject)

module.exports = router