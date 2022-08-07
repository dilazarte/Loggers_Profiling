const express = require('express')
const {Router} = express
const {getAdmin} = require('../controllers/viewsControllers')
const { authCheck } = require('../middlewares/authCheck')

const adminRouter = Router()

adminRouter.get('/', authCheck, getAdmin)

module.exports= adminRouter