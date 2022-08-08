const express = require('express')
const router = express.Router()

// import controller
const importUser = require('../Controller/usercontroler.js')

// import middlewares

router.post('/signup',importUser.doSignup)

module.exports = router