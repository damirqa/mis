const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class ProjectUsers extends Model {

}

ProjectUsers.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        user_id: {type: DataTypes.INTEGER},
        project_id: {type: DataTypes.INTEGER}
    },
    {sequelize, modelName: 'project_users', timestamps: true}
)

module.exports = ProjectUsers