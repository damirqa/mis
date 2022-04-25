const User = require('./User')
const Token = require('./Token')
const Project = require('./Project')
const ProjectTypes = require('./ProjectTypes')
const ProjectUsers = require('./ProjectUsers')
const State = require('./State')
const Task = require('./Task')


Token.belongsTo(User)
State.hasMany(Task)

module.exports = {
    User,
    Token,
    Project,
    ProjectTypes,
    ProjectUsers,
    State,
    Task
}