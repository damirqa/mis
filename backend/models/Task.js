const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class Task extends Model {

}

Task.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
    owner: {type: DataTypes.INTEGER, allowNull: false}

}, {sequelize, modelName: 'task', timestamps: true})

module.exports = Task