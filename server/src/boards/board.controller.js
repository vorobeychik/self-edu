const { Router } = require('express');
const { createBoard, deleteBoard, updateBoard } = require('./board.service');
const { addBoard, removeBoard } = require('../user/user.service')
const router = Router();


router.post('/create', async (req, res) => {
    try {
        const { board, userId } = req.body;
        const createdBoard = await createBoard(board);
        await addBoard(userId, createdBoard.id)
        res.json(board)
    } catch (error){
        res.json(null);
    }

})

router.post('/delete',async (req, res) => {
    try {
        const { boardId, userId } = req.body;
        await removeBoard(userId, boardId)
        await deleteBoard(boardId);

        res.json(boardId)
    }catch (error){
        res.json(null);
    }

})

router.post('/update', async (req, res) => {
    try {
        const { board } = req.body;
        await updateBoard(board);

        res.json(board.id)
    }catch (error){
         res.json(null)
    }

})

module.exports = router;