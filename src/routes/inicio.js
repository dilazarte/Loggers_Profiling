const express = require('express')
const {Router} = express
const {getInicio} = require('../controllers/viewsControllers')

const inicioRouter = Router()

inicioRouter.get('/', getInicio)

module.exports = inicioRouter