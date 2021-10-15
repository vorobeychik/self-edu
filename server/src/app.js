const axios = require("axios");
const express = require('express');
const { decodeAccessToken } = require('./utils/utils')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
const secret = 'asd';

app.use(cookieParser())
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
)

async function getGitHubAccessToken(code){
    const res = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=0cc07a1ee9b85c6d817e&code=${code}&client_secret=2c99a52849e62a4bd9795f6a92f958340f157fb9`,
    );
    return res.data;
}

async function getUserData(accessToken){
    const res = await axios.get(
        `https://api.github.com/user`,
        {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
    return res.data;
}


app.get('/api/auth/github',async (req, res) => {
    const { code } = req.query;
    const data = await getGitHubAccessToken(code);
    console.log(req.query.code)
    const accessToken = decodeAccessToken(data);
    const user = await getUserData(accessToken)
    console.log(user)
    const token = jwt.sign(user, secret);

    res.cookie('github-jwt',token, {
        httpOnly: true,
        domain: 'localhost'
    })

    res.redirect('http://localhost:3000')
})


app.get('/api/user',(req, res) => {
    const cookie = req.cookies;
    console.log('coookie',cookie)

    res.json(1)
})

app.listen(4000,() => {
    console.log('server listning')
})
