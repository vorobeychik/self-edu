const axios = require("axios");
const userModel = require('./user.model');

class UserService{

    async getGitHubAccessToken(code){
        const res = await axios.post(
            `https://github.com/login/oauth/access_token?client_id=0cc07a1ee9b85c6d817e&code=${code}&client_secret=2c99a52849e62a4bd9795f6a92f958340f157fb9`,
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
        console.log('gitHubId',gitHubId)
        return userModel.findOne({ gitHubId })
    }

    async createUser(gitHubId){
        return userModel.create({ gitHubId })
    }

}


module.exports = new UserService()