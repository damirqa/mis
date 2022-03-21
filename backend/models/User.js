const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class User extends Model {

}

User.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        username: {type: DataTypes.STRING, unique: true},
        full_name: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: 'user'},
        auth_key: {type: DataTypes.STRING},
        password_hash: {type: DataTypes.STRING},
        password_reset_token: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING, unique: true},
        email_confirmed: {type: DataTypes.BOOLEAN},
        status: {type: DataTypes.BOOLEAN},
    },
    { sequelize, modelName: 'user', timestamps: true}
)

module.exports = User