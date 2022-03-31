const {User} = require('../models/index')
const UserService = require('../services/UserService')

class AuthenticationController {

    async registration(req, res, next) {
        try {
            const userData = await UserService.registration(req)

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData)
        }
        catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body

            if (!email || !password) throw new Error('One of the fields is not filled in')

            const user = await User.findOne({where: {email}})

            if (!user)  throw new Error('Invalid username or password')

            let comparePassword = bcrypt.compareSync(password, user.password_hash)

            if (!comparePassword) return res.json({status: "danger", message: "Invalid username or password"})

            const token = createJwt(user.id, user.email, user.role)

            res.json({status: 'success', message: 'You have successfully logged in', token})
        }
        catch (e) {
            console.log(e)
        }
    }

    async logout(req, res, next) {
        try {

        }
        catch (e) {
            console.log(e)
        }
    }

    async refresh(req, res, next) {
        try {

        }
        catch (e) {
            console.log(e)
        }
    }

    async confirmEmail(req, res, next) {
        try {
            const token = req.params.token
            await UserService.comfirm(token)
            return res.redirect(process.env.APP_URL)
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AuthenticationController();