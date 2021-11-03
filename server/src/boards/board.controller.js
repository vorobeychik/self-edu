const { Router } = require('express');
const { createBoard, deleteBoard, updateBoard, createNewNote } = require('./board.service');
const { addBoard, removeBoard } = require('../user/user.service')
const router = Router();


router.post('/create', async (req, res) => {
    const { board, userId } = req.body;
    console.log(123)
    const createdBoard = await createBoard(board);
    await addBoard(userId, createdBoard.id)
    res.json( board )
})

router.post('/delete',async (req, res) => {
    const { boardId, userId } = req.body;
    await removeBoard(userId, boardId)
    await deleteBoard(boardId);

    res.json(1)
})

router.post('/update', async (req, res) => {
    const { board } = req.body;
    await updateBoard(board);

    res.json(1)
})

module.exports = router;