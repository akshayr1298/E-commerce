// import modules
const express = require('express');
const {json,urlencoded} = express
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// app
const app = express();


//db
mongoose.connect('mongodb://localhost:27017/E-commerce').then((data,err)=>{
    if(err){
        console.log('database not connected',err);

    }else{
        console.log('database connected');
    }
})


// middleware
app.use(cors({orgins:true,credentials:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

// routes
const userRoutes = require("./Routes/userroute")
const adminRoutes = require("./Routes/adminroute")
app.use('/',userRoutes)
app.use('/admin',adminRoutes)


// port
app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})