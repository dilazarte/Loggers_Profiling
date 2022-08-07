const express = require('express')
const {Router} = express
const {getLogout} = require('../controllers/viewsControllers')

const logoutRouter = Router()

logoutRouter.get('/', getLogout)


module.exports= logoutRouter