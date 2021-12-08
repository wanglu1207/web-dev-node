const express=require('express');
const router=express.Router();
const signUp=require('../project/models/SignUpModels');

router.post('/signup',(req,res)=>{
    const signedUpUser=new signUp({
        fullName:req.body.fullName,
        userName:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signedUpUser.save()
        .then(data=>{
            res.json(date)
        })
        .catch(error=>{
            res.json(error)
        })
})

module.exports=router;