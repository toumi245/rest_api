const express=require('express')
const mongoose=require('mongoose');
const connectDB = require('./DB/connectDB.JS');
require("dotenv").config({path:"./config/.env"})
const app=express();
//add middleware routing parser
app.use(express.json())
//create route
app.use("/api/contact",require("./routes/contact"))




connectDB();
const PORT=process.env.PORT||6100;

app.listen(PORT,(err)=>{
    err?
    console.log(err)
    :console.log(`server is run in ${PORT}`)
    
})