const express = require('express')
const router = express.Router()

const importAdmin = require('../Controller/admincontroler')



router.post('/adminlogin',importAdmin.doAdminLogin)
router.post('/adminlogout',importAdmin.adminLogout)


module.exports = router 