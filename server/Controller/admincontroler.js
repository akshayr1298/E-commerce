require('dotenv').config()
const Admin = require('../Models/admin')
const bcrypt = require('bcrypt')
const adminToken = process.env.ADMIN_ACCESS_TOKEN_SECRET
const adminrefreshToken = process.env.ADMIN_REFRESH_TOKEN_SECRET
const jwt = require('jsonwebtoken')

module.exports =  {
    doAdminLogin: async(req,res)=>{
        console.log('post submited');
        console.log(req.body);
        try{
            const {email,password} = req.body
            const admin = await Admin.findOne({email})
            console.log(admin);
            if(!admin){            
               return res.status(401).json({error:"Invalid Email"})
            }
            const isPasswordValid = bcrypt.compare(password,admin.password)
            if(!isPasswordValid){
                return res.status(401).json({error:("Invalid Password")})
            }
            const adminaccessToken = jwt.sign(email,adminToken)
            res.cookie('adminaccessToken',adminaccessToken,{maxAge:60000,httpOnly:true} )
            res.cookie('adminrefreshToken',adminrefreshToken, {httpOnly:true})
            res.json({adminaccessToken:adminaccessToken})
            return res.status(200).json({message:'Success'})


        }catch(err){
            console.log(err);
        }

    },


    adminLogout: (req, res) => {
        try {
          console.log('resss');
          console.log(req.cookies);
          res.clearCookie('adminaccessToken');
          res.clearCookie('adminrefreshToken')
          return res.json({ message: 'logout successful' });
        } catch (error) {
          console.log(error);
          return res.status(401).json({ error: 'logout failed' }); // 401 Unauthorized;
        }
      },



}