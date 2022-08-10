const express = require('express')
const router = express.Router()

// import controller
const importUser = require('../Controller/usercontroler.js')

// import middlewares

router.post('/signup',importUser.doSignup)
router.post('/otpverify',importUser.verifyOTP)
router.post('/userlogin',importUser.doLogin)
router.post('/logout',importUser.logout)

module.exports = router