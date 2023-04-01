const Contact=require('../model/Contact');

exports.postContact=async(req,res)=>{
    //destruct req body
    const {name,email}=req.body
    try {
        //create new contact with the model contact
    const newContact=new Contact(req.body)
    //test if the user has an email
    if(!name||! email){
        res.status(400).send({message:"email is required"})
    }
    //test 2 if the email already exist
    const user=await Contact.findOne({email:req.body.email})
    if (user){
        res.status(400).send({mesage:"user already exist email should be unique"})
    return;
    }
    //savve the contact
    const response=await newContact.save();
    res.status(200).send({response:response,message:"user is saved"})
    
}  
     catch (error) {
        res.status(500).send({message:"can not save it"})
    console.log(error)
    }
}
//desc : GET all contacts 
exports.getContact=async(req,res)=>{
    try {
        const result=await Contact.find()
        res.status(200).send({response:result,message:"getting contacts successful"})
    } catch (error) {
        res.status(500).send({message:"can not get contacts "})
    console.log(error)
    }

}
//get contact by id
exports.getContactById=async(req,res)=>{
    try {
        const result=await Contact.findOne({_id:req.params.id});
        res.status(200).send({response:result,message:"getting contacts by id successful"})
    } catch (error) {
        res.status(500).send({message:"can not get contacts by id"})
    console.log(error)
    }

}
//delete contact by id
exports.deleteContact=async(req,res)=>{
    try {
        await Contact.deleteOne({_id:req.params.id});
        res.status(200).send({message:"user get deleted"})
    } catch (error) {
        res.status(500).send({message:"can not deleted"})
    console.log(error)
    }}
    //update contact by id
    exports.editContact=async(req,res)=>{
        try {
            const resulst=await Contact.updateOne({_id:req.params.id},{$set:{...req.body}});
            res.status(200).send({message:"user get updated"})
        } catch (error) {
            res.status(500).send({message:"can not updated"})
        console.log(error)
        }

}