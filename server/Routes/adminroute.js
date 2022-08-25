const express = require('express')
const router = express.Router()

const importAdmin = require('../Controller/admincontroler')



router.post('/adminlogin',importAdmin.doAdminLogin)


module.exports = router 