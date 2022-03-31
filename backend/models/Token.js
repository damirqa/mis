const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class Token extends Model {

}

Token.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        refreshToken: {type: DataTypes.STRING, allowNull: false}
    },
    { sequelize, modelName: 'token', timestamps: true}
)

module.exports = Token