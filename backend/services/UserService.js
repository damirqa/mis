const uuid = require('uuid')
const bcrypt = require('bcrypt')
const {User} = require('../models/index')
const MailService = require('../services/MailService')
const TokenService = require('../services/TokenService')
const UserDto = require('../dto/userDto')
const ApiError = require('../exceptions/ApiError')

class UserService {
    async registration (email, password, confirm_password) {
        if (!email || !password || !confirm_password) throw ApiError.BadRequest('One of the fields is not filled in')
        if (password !== confirm_password)            throw ApiError.BadRequest('Passwords don\'t match')

        let findUser = await User.findOne({ where: { email }})

        if (findUser) throw ApiError.BadRequest('The mail is already busy')

        const email_confirm_token = uuid.v4()

        const user = await User.create({
            username: email,
            email: email,
            email_confirm_token: email_confirm_token,
            password_hash: await bcrypt.hash(password, 3),
            role: 'user',
            status: true
        })

        //await MailService.sendConfirmEmail(email, `${process.env.API_URL}/auth/confirm-email/${email_confirm_token}`) // TODO UNCOMMENT

        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto }
    }

    async comfirm(token) {
        const user = await User.findOne({ where: {email_confirm_token: token}})

        if (!user) throw ApiError.BadRequest('Invalid confirmation token')

        user.status = true
        user.email_confirmed = true
        user.email_confirm_token = null
        await user.save()
    }

    async login(email, password) {
        if (!email || !password) throw ApiError.BadRequest('One of the fields is not filled in')

        const user = await User.findOne({where: {email}})

        if (!user) throw ApiError.BadRequest('Invalid username or password')

        let comparePassword = bcrypt.compareSync(password, user.password_hash)

        if (!comparePassword) throw ApiError.BadRequest('Invalid username or password')

        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto }
    }

    async logout(refreshToken) {
        const tokenData = await TokenService.removeToken(refreshToken)
        return tokenData
    }

    async refresh(refreshToken) {
        if (!refreshToken) throw ApiError.UnauthorizedError()

        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await TokenService.findToken(refreshToken)

        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }

        const user = await User.findByPk(userData.userId)
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto }
    }

    async getAllUsers() {
        const users = User.findAll()
        return users
    }

}

module.exports = new UserService();