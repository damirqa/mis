const express = require('express')
const router = express.Router();

const authenticationRouter = require('./AuthenticationRouter')
const projectRouter = require('./ProjectRouter')
const projectTypesRouter = require('./ProjectTypesRouter')

router.use('/auth', authenticationRouter)
router.use('/project', projectRouter)
router.use('/project-types', projectTypesRouter)

module.exports = router