const express=require('express');
const router=express.Router();
const controllers=require('../controllers/contactControllers')
//test routing
router.get('/hi',(req,res)=>{
    res.send('hello')
})
//post contact
//with req.body

router.post('/',controllers.postContact)
//get contact 
router.get('/',controllers.getContact)
//get contact by id
router.get('/:id',controllers.getContactById)
//delete
router.delete('/:id',controllers.deleteContact)
router.put('/:id',controllers.editContact)
module.exports=router