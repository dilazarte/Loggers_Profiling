const express = require('express');
const {Router} = express
const {getChat, postNewChat} = require('../controllers/chatController')

const chatsRouter = Router();


chatsRouter.get('/', getChat)

chatsRouter.post('/', postNewChat)

module.exports = chatsRouter