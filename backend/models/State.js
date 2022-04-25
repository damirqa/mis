const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class State extends Model {

}

State.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING},
    serial_number: {type: DataTypes.INTEGER},
    project_id: {type: DataTypes.INTEGER},
    active: {type: DataTypes.BOOLEAN}
},
{sequelize, modelName: 'state', timestamps: true})

module.exports = State