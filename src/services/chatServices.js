const {schema,normalize} = require('normalizr');
const {DaosMongo} = require('../DAOs/DaosMongo')
const daosChat = new DaosMongo()

//defino mi schema con normalizr
const authorSchema = new schema.Entity('author')
const mensajeSchema = new schema.Entity('mensaje')
const mensajesSchema = new schema.Entity('mensajes', {
    mensajes: [
        {
            author: authorSchema,
            text: [mensajeSchema]
        }
    ]
})

async function getChatsDB(){
    const data = await daosChat.getAllDoc();
    const mensajes = {id: 'mensajes', mensajes: data.map((el) => ({
        author: el.author,
        text: el.text,
        id: el._id
    }))};
    const normalizedChat = normalize(mensajes, mensajesSchema);
    return normalizedChat;
}

async function postChatsDB(msg){
    const newChat = await daosChat.addDoc(msg)
    return newChat
}

module.exports = {getChatsDB, postChatsDB}