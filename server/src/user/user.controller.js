const { Router } = require('express')
const userService = require('./user.service')
const jwt = require("jsonwebtoken");
const router = Router()
require('dotenv').config()

const secret = process.env.JWT_SECRET;

router.get(
    '/auth',
    async (req, res) => {
        const { code } = req.query;
        const data = await userService.getGitHubAccessToken(code);
        const accessToken = userService.decodeAccessToken(data);
        const gitHubUser = await userService.getUserGitHubProfileData(accessToken)

        const candidate = await userService.getUser(gitHubUser.id);
        if(!candidate){
            await userService.createUser(gitHubUser.id);
        }
        const token = jwt.sign(gitHubUser, secret);
        
        res.cookie('github-jwt',token, {
            httpOnly: true,
            domain: 'localhost'
        })

        res.redirect('http://localhost:3000')
    }
)

router.get('/',async (req, res) => {
    try {
        const token = req.cookies['github-jwt'];
        const verifiedUser = jwt.verify(token, secret);
        const userData = await userService.getUser(verifiedUser.id);
        const user = {...verifiedUser, userData};

        res.json(user)
    }catch (error){
        res.send(null)
    }

})

module.exports = router;