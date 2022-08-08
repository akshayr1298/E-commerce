require('dotenv').config();     
const User = require("../Models/users")
const bcrypt = require('bcrypt')
const accountSID = process.env.AccountSID
const auth_token = process.env.Auth_Token
const serviceSID = process.env.ServiceSID
const client =  require('twilio')(accountSID,auth_token)

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
            
            // const hashPswrd = await bcrypt.hash(req.body.password,10)
            // await User.create({
            //  fname:req.body.fName,
            //  lname:req.body.lName,
            //  phonNO:req.body.phNo,
            //  email:req.body.email,
            //  password:hashPswrd,
             
            // })
            // console.log(req.body.phNo);

            // res.json({status:200})
        }catch(err){
            console.log(err);
            res.json({status:'error',error:'Duplicate email '})
    } 

    }



    
}