const express = require('express')
const {Router} = express
const {signupError} = require('../controllers/viewsControllers')

const signUpError = Router()

signUpError.get('/', signupError)

module.exports= signUpError