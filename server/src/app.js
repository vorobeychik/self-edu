const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userController = require('./user/user.controller');
const boardController = require('./boards/board.controller');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { devOrigin, prodOrigin, userEndpoint, serverLink, boardEndpoint, uri} = require('./constants/constants');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 4000;

app.use(
    cors({
        origin: [devOrigin, prodOrigin],
        credentials: true,
    })
)
app.use(cookieParser())
app.use(bodyParser.json())
app.use(`${serverLink}${userEndpoint}`, userController);
app.use(`${serverLink}${userEndpoint}`, boardController)

async function start() {
    await mongoose.connect(uri);

    app.listen(port,() => {
        console.log(`Server listening on port ${port}`)
    })
}

start()

