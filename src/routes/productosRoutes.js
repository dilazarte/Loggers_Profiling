const express = require('express')
const {Router} = express
const {getProdsRandoms} = require('../controllers/prodRandomController')

const prodTest = Router();

prodTest.get('/', getProdsRandoms)

module.exports = prodTest