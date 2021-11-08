const axios = require("axios");
const userModel = require('./user.model');
const { getBoards } = require('../boards/board.service');

class UserService{

    async getGitHubAccessToken(code){
        const res = await axios.post(
            `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_GIT_ID}&code=${code}&client_secret=${process.env.CLIENT_SECRET}`,
        );
        return res.data;
    }

    async getUserGitHubProfileData(accessToken){
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

     decodeAccessToken(accessToken){
        return accessToken.split('=')[1].split('&')[0];
    }

    async getUser(gitHubId){
        return  userModel.findOne({ gitHubId });
    }

    async getUserBoards(gitHubId){
        const user = await this.getUser(gitHubId);
        const userBoards = await getBoards(user.boards);
        return  {_id: user._id, boards: userBoards};
    }

    async createUser(gitHubId){
        return userModel.create({ gitHubId, })
    }

    async addBoard( userId, boardId){
        await userModel.updateOne({ _id: userId} , { $push: {boards: boardId }})
    }

    async removeBoard(userId, boardId){
       const user = await userModel.findOne({_id: userId})
       const updated = await userModel.updateOne({_id: userId}, { $pull:{ boards: boardId} })
    }
}


module.exports = new UserService()