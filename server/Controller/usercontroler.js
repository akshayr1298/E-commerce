require('dotenv').config();     
const User = require("../Models/users")
const bcrypt = require('bcrypt')
const accountSID = process.env.AccountSID
const auth_token = process.env.Auth_Token
const serviceSID = process.env.ServiceSID
const secretToken = process.env.ACCESS_TOKEN_SECRET
const refreshToken = process.env.REFRESH_TOKEN_SECRET
const client =  require('twilio')(accountSID,auth_token)
const jwt = require('jsonwebtoken')

module.exports={
    doSignup:async(req,res)=>{
        console.log('post submitted');
        console.log(req.body);
        try{
            const emailExists = await User.findOne({email:req.body.email})
            if(emailExists){
                return res.status(403).json({
                    alert:"Email already exists"
                })
            }
                console.log("number",req.body.phNo); 

              let response = await client.verify.services(serviceSID).verifications.create({
                    to: `+91${req.body.phNo}`,
                    channel:"sms"
                })
                console.log('response',response)
                return res.status(200).json({data:'otp send'})
           
        }catch(err){
            console.log(err);
            if(err.message==='duplicate email')
            res.status(409).json({status:'error',error:'Duplicate email '})

            res.status(500).json({status:'error',error:'internal error occured'})
    } 

    },

    verifyOTP:async(req,res)=>{
        console.log('otp submitted');
        console.log(req.body);
        const otp = req.body.otp
        const ph = req.body.data.phNo
        console.log('otp & ph',otp,' ',ph);
        try{
        
        let otpverify = client.verify.services(serviceSID).verificationChecks.create({
            to:`91+${req.body.data.phNo}`,
            code:otp})
            console.log(otpverify);
            const hashPswrd = await bcrypt.hash(req.body.data.password,10)
             await User.create({
              fname:req.body.data.fName,
              lname:req.body.data.lName,
              phonNO:req.body.data.phNo,
              email:req.body.data.email,
              password:hashPswrd,
             })
             return res.status(200).json({data:'success'})
        }catch(err){
            console.log(err);
        }
        
    },
   
    doLogin:async(req,res)=>{
        try{          
            const {email,password} = req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(401).json({error:"Invalid Email"}) // unauthorized
            }
            const isPasswordValid = await bcrypt.compare(password,user.password) 
            if(!isPasswordValid){
                return res.status(401).json({error:"Invalid password"}) // unauthorized
            }
           const accessToken =  jwt.sign(email,secretToken)
        //    res.json({accessToken:accessToken})
           res.cookie('accessToken', accessToken, { maxAge: 600000, httpOnly: true })
           res.cookie('refreshToken', refreshToken, { httpOnly: true })
           res.cookie('uerId', user._id, { httpOnly: true })
           return res.status(200).json({ message: 'Success' })

        }catch(err){
            console.log(err);
        }
    },

    logout: (req, res) => {
        try {
          console.log('resss');
          console.log(req.cookies);
          res.clearCookie('accesToken');
          res.clearCookie('refreshToken')
          return res.json({ message: 'logout successful' });
        } catch (error) {
          console.log(error);
          return res.status(401).json({ error: 'logout failed' }); // 401 Unauthorized;
        }
      },




    
}