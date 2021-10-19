const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userController = require('./user/user.controller')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express();

app.use(cookieParser())
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
)
app.use('/api/user', userController)

const uri = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.kul9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function start() {
    await mongoose.connect(uri);

    app.listen(4000,() => {
        console.log('server listning')
    })
}

start()






// app.get('/api/user/auth',async (req, res) => {
//     const { code } = req.query;
//     const data = await getGitHubAccessToken(code);
//     console.log(req.query.code)
//     const accessToken = decodeAccessToken(data);
//     const user = await getUserData(accessToken)
//     console.log(user)
//     const token = jwt.sign(user, secret);
//
//     res.cookie('github-jwt',token, {
//         httpOnly: true,
//         domain: 'localhost'
//     })
//
//     res.redirect('http://localhost:3000')
// })
//
//
// app.get('/api/user',(req, res) => {
//     try {
//         const token = req.cookies['github-jwt'];
//         console.log('coookie',token)
//
//         const verified = jwt.verify(token, secret)
//
//         console.log('is verified', verified)
//
//         res.json(verified)
//     }catch (error){
//         res.send(null)
//     }
//
// })


