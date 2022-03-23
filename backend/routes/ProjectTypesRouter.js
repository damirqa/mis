const express = require('express')
const router = express.Router()
const {ProjectTypes} = require('../models/index')

router.post('/', async (req, res) => {
    const projectTypes = await ProjectTypes.findAll()
    return res.json(projectTypes)
})

module.exports = router