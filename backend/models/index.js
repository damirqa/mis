const User = require('./User')
const Token = require('./Token')
const Project = require('./Project')
const ProjectTypes = require('./ProjectTypes')
const ProjectUsers = require('./ProjectUsers')

Token.belongsTo(User)

module.exports = {
    User,
    Token,
    Project,
    ProjectTypes,
    ProjectUsers
}