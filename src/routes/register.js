const express = require('express')
const passport = require('passport');
const {getRegister, postRegister} = require('../controllers/viewsControllers')
const {Router} = express

const registerRouter = Router()


registerRouter.get('/', getRegister)

registerRouter.post('/', passport.authenticate('signup', { failureRedirect: '/signupError' }), postRegister)

module.exports= registerRouter