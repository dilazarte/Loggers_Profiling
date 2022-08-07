const express = require('express')
const {Router} = express
const {getLoginError} = require('../controllers/viewsControllers')

const loginError = Router()

loginError.get('/', getLoginError)

module.exports= loginError