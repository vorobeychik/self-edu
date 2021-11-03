const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userController = require('./user/user.controller');
const boardController = require('./boards/board.controller');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

app.use(
    cors({
        origin: ['http://localhost:3000','https://festive-wozniak-c7bc50.netlify.app/'],
        credentials: true,
    })
)
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api/user', userController);
app.use('/api/board', boardController)

const uri = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.kul9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function start() {
    await mongoose.connect(uri);

    app.listen(4000,() => {
        console.log('server listning')
    })
}

start()

