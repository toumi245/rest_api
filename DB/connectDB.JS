const mongoose=require("mongoose")
require("dotenv").config({path:"./config/.env"})
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongoURI)
        console.log('data base connected!!!')
    } catch (error) {
        console.log('error',error)
    }
}
module.exports=connectDB;