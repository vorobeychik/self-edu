const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const initialBoard = {
    name: 'Goals',
    type: 'board',
    id: uuidv4(),
    categories:[
        { 'name': 'todo', id: uuidv4() ,
            notes:[
                { id: uuidv4(),
                    status: 'todo',
                    tags:[],
                    comments:[],
                    properties:[],
                    title: 'feed cat'}
            ]
        },
        { 'name': 'in progress', id: uuidv4(), notes:[]},
        { 'name': 'done', id: uuidv4(), notes:[]}
    ]
}

const devOrigin = 'http://localhost:3000';
const prodOrigin = 'https://festive-wozniak-c7bc50.netlify.app/';

const serverLink = '/api/';
const userEndpoint = 'user';
const boardEndpoint = 'board';
const uri = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.kul9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = { devOrigin, prodOrigin, initialBoard, userEndpoint, boardEndpoint, serverLink, uri};