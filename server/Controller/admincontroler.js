
const Admin = require('../Models/Admin')
const bcrypt = require('bcrypt')


module.exports =  {
    doAdminLogin: async(res,req)=>{
        console.log('post submited');
        console.log(req.body);
        try{
            const {email,password} = req.body
            const admin = await Admin.findOne({email})
            if(!admin){
               return res.status(401).json({error:"Invalid Email"})
            }
            const isPasswordValid = bcrypt.compare(password.admin.password)
            if(!isPasswordValid){
                return res.status(401).json({error:("Invalid Password")})
            }
            



        }catch(err){
            console.log(err);
        }

    }

}