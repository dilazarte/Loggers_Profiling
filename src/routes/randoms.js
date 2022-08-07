const express = require('express')
const {Router} = express

const {getRandomsNums} = require('../controllers/viewsControllers')


const randomsNum = Router()

randomsNum.get('/', getRandomsNums)

module.exports= randomsNum