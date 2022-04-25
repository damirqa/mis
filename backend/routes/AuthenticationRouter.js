const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { body } = require('express-validator')

const authenticationController = require('../controllers/AuthenticationController')
const User = require('../models/index').User
const error = require('../exceptions/ApiError')

const createJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
router.post('/register',
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({min: 8, max: 16}),
    authenticationController.registration)

router.post('/login',
    authenticationController.login)

router.post('/logout', authenticationController.logout)

router.get('/test', (req, res) => {

})

router.get('/confirm-email/:token', authenticationController.confirmEmail)

router.get('/refresh-token', authenticationController.refresh)

router.get('/forgot-password', authenticationController.logout) // TODO FIX

module.exports = router