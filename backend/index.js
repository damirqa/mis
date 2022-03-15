require('dotenv').config();

const express = require('express');
const sequelize = require('./db')

const port = process.env.PORT || 8000;

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(port, function () {
            console.log(`Server started on port ${port}`)
        });
    }
    catch (e) {
        console.log(e);
    }
};

start();