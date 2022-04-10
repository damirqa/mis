require('dotenv').config();

const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')
const models = require('./models/')
const routes = require('./routes/index')
const errorMiddleware = require('./middlewares/ErrorMiddleware')

const port = process.env.PORT || 8000;
const app = express();

app.use(cors({credentials: true, origin: process.env.CLIENT_URL}))
app.use(express.json())
app.use(cookieParser())
app.use('/api', routes)
app.use(errorMiddleware)

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

