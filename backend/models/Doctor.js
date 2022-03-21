const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class Doctor extends Model {

}

Doctor.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        full_name: {type: DataTypes.STRING},
    },
    { sequelize, modelName: 'doctor', timestamps: true}
)