const express = require('express')
const passport = require('passport');
const {Router} = express
const {getLogin, postLogin} = require('../controllers/viewsControllers')

const loginRouter = Router()


loginRouter.get('/', getLogin)

loginRouter.post('/', passport.authenticate('login', {failureRedirect: '/loginError'}), postLogin)

module.exports= loginRouter