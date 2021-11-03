const boardModel = require('./board.model');
const moongose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


class BoardService{
    async createBoard(board){
        return boardModel.create({...board})
    }

    async deleteBoard(boardId){
        return boardModel.deleteOne({ id: boardId})
    }

    async getBoards( boardsIds){
        return boardModel.find({ id: boardsIds})
    }

    async updateBoard(board){
       return boardModel.updateOne({_id: board._id}, {...board})
    }
}

module.exports = new  BoardService();