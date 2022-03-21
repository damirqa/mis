const {DataTypes, Model} = require('sequelize')
const sequelize = require('../db')

class Patient extends Model {

}

Patient.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        full_name: {type: DataTypes.STRING},
    },
    { sequelize, modelName: 'patient', timestamps: true}
)