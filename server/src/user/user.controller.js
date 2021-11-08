const { Router } = require('express')
const userService = require('./user.service')
const jwt = require("jsonwebtoken");
const { createBoard } = require('../boards/board.service');
const router = Router();
const { initialBoard } = require('../constants/constants')
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
            const user = await userService.createUser(gitHubUser.id);
            const board = await createBoard(initialBoard);
            await userService.addBoard(user._id, board.id)
        }
        const token = jwt.sign(gitHubUser, secret);
        
        res.cookie('github-jwt',token, {
            domain: 'localhost'
        })

        res.redirect('http://localhost:3000')
    }
)

router.get('/',async (req, res) => {
    try {
        const token = req.cookies['github-jwt'];
        const verifiedUser = jwt.verify(token, secret);
        const userDate = await userService.getUserBoards(verifiedUser.id);
        const user = {...verifiedUser, ...userDate};
        res.json(user)
    }catch (error){
        res.send(null)
    }

})

module.exports = router;