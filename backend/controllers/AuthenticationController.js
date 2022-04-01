const {User} = require('../models/index')
const ApiError = require('../exceptions/ApiError')
const UserService = require('../services/UserService')
const { validationResult } = require('express-validator')

class AuthenticationController {

    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return next(ApiError.BadRequest('Validation error', errors.array()))

            const {email, password, confirm_password} = req.body
            const userData = await UserService.registration(email, password, confirm_password)

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData)
        }
    catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body

            const userData = await UserService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData)
        }
        catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await UserService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return userData
        }
        catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        }
        catch (e) {
            next(e)
        }
    }

    async confirmEmail(req, res, next) {
        try {
            const token = req.params.token
            await UserService.comfirm(token)
            return res.redirect(process.env.APP_URL)
        }
        catch (e) {
            next(e)
        }
    }
}

module.exports = new AuthenticationController();