const express = require('express')
const router = express.Router();

const authenticationRouter = require('./AuthenticationRouter')
const projectRouter = require('./ProjectRouter')
const projectTypesRouter = require('./ProjectTypesRouter')
const stateRouter = require('./StateRouter')
const taskRouter = require('./TaskRouter')


router.use('/auth', authenticationRouter)
router.use('/project', projectRouter)
router.use('/project-types', projectTypesRouter)
router.use('/state', stateRouter)
router.use('/task', taskRouter)

module.exports = router