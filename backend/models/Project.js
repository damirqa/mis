const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class Project extends Model {

}

Project.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    type: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT},
    owner: {type: DataTypes.INTEGER},
    },
    {sequelize, modelName: 'project', timestamps: true}
)

module.exports = Project