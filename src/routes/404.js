const express = require('express')
const {Router} = express


const notFound = Router()

notFound.get('/', (req, res)=>{
    res.render('404')
})

module.exports= notFound