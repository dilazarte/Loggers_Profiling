const {getChatsDB, postChatsDB} = require('../services/chatServices')

async function getChat(req, res){ 
    const data = await getChatsDB()
    res.json(data)
}

async function postNewChat(req, res) {
    const data = await postChatsDB(req.body)
    res.json(data)
}

module.exports = {getChat, postNewChat}