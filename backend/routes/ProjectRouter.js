const express = require('express')
const router = express.Router()
const {Project, ProjectUsers, ProjectTypes} = require('../models/index')

router.post('/all', async (req, res) => {
    const {user_id} = req.body

    const projects_user = await ProjectUsers.findAll({where: {user_id}})
    .then(async project => {
        return Project.findByPk(project.project_id)
    })

    return res.json({projects: projects_user})
})

router.post('/create', async (req, res) => {
    const {name, type, description, owner} = req.body
    
    if (!name || !type || !owner) return res.json({status: "danger", message: "One of the fields is not filled in"})

    const project = await Project.create(req.body)

    if (project) return res.json({status: "success", message: "The project was successfully created", project: project})

    return res.json({status: "danger", message: "Unknown error"})

})

module.exports = router