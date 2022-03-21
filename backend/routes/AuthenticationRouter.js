const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/index').User
const error = require('../error/ApiError')

const createJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    if (!email || !password) return res.json({status: "danger", message: "One of the fields is not filled in"})

    const user = await User.findOne({where: {email}})

    if (!user) return res.json({status: "danger", message: "Invalid username or password"})

    let comparePassword = bcrypt.compareSync(password, user.password_hash)

    if (!comparePassword) return res.json({status: "danger", message: "Invalid username or password"})

    const token = createJwt(user.id, user.email, user.role)

    res.json({status: 'success', message: 'You have successfully logged in', token})

})

router.post('/register', async (req, res) => {
    try {
        const {email, password, confirm_password} = req.body

        if (!email || !password || !confirm_password) return res.json({status: "danger", message: "One of the fields is not filled in"})
        if (password !== confirm_password)            return res.json({status: "danger", message: "Passwords don't match"})

        let findUser = await User.findOne({ where: { email }})

        if (findUser) return res.json({status: "danger", message: "The mail is already busy"})

        const user = await User.create({
            username: email,
            email: email,
            password_hash: await bcrypt.hash(password, 3),
            role: 'user',
            status: true
        })

        if (user) return res.json({status: "success", message: "You have successfully registered"})

        return res.json({status: "danger", message: "Unknown error"})
    }
    catch (e) {
        return error.internal(e.message)
    }
})

router.post('/forgot-password', (req, res) => {

})

module.exports = router