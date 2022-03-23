const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class ProjectTypes extends Model {

}

ProjectTypes.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING}
    },
    {sequelize, modelName: 'project_types', timestamps: true}
)

module.exports = ProjectTypes