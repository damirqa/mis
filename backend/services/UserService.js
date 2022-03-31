const uuid = require('uuid')
const bcrypt = require('bcrypt')
const {User} = require('../models/index')
const MailService = require('../services/MailService')
const TokenService = require('../services/TokenService')
const UserDto = require('../dto/userDto')

class UserService {
    async registration (request) {
        const {email, password, confirm_password} = request.body

        if (!email || !password || !confirm_password) throw new Error('One of the fields is not filled in')
        if (password !== confirm_password)            throw new Error('Passwords don\'t match')

        let findUser = await User.findOne({ where: { email }})

        if (findUser) throw new Error('The mail is already busy')

        const email_confirm_token = uuid.v4()

        const user = await User.create({
            username: email,
            email: email,
            email_confirm_token: email_confirm_token,
            password_hash: await bcrypt.hash(password, 3),
            role: 'user',
            status: true
        })

        await MailService.sendConfirmEmail(email, `${process.env.API_URL}/auth/confirm-email/${email_confirm_token}`)

        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto }
    }

    async comfirm(token) {
        const user = await User.findOne({ where: {email_confirm_token: token}})

        if (!user) throw new Error('Invalid confirmation token')

        user.status = true
        user.email_confirmed = true
        user.email_confirm_token = null
        await user.save()
    }
}

module.exports = new UserService();