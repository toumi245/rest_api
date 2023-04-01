const mongoose=require('mongoose')
const {Schema,model}=mongoose


contactSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    phone:String
})
const contact=model("contacts",contactSchema)




module.exports=contact