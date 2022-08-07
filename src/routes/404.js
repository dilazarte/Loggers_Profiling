const express = require('express')
const { loggerError } = require('../utils/loggers')
const {Router} = express


const notFound = Router()

notFound.get('/', (req, res)=>{
    res.render('404')
    loggerError.error(`Pagina no encontrada ${req.baseUrl}`)
})

module.exports= notFound