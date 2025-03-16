 const express=require('express');
 const app=express();
 const mongoose=require('mongoose');
 const router=express.Router();
 const user44=require("../MODELS/userModels")






 //create operation
 router.post("/",async(req,res)=>{
   const {name,email,age}=req.body; //data entered by user will n=be in rq.body
 
   //now we wan tto send the datat to database with help of model
  
   try {
     const userAdded= await user44.create({
       name:name,
       email:email,
       age:age,
     })
     res.status(201).json(userAdded)
   } catch (error) {
     res.status(400).json( {error:error.message})
   }
 
 
 })
 
 //operation to get alll the data from the data base
 router.get("/",async(req,res)=>{
  
   try {
     const showAll=await user44.find();
     res.status(201).json(showAll)
   } catch (error) {
     res.status(500).json( {error:error.message})
   }
 
 })

 //operation for getting single user any entry
 router.get("/:id",async(req,res)=>{
  const {id}=req.params;
  
  try {
    const singleUser=await user44.findById({_id:id});
    res.status(201).json(singleUser)
  } catch (error) {
    res.status(500).json( {error:error.message})
  }

})

//delete operation
router.delete("/:id",async(req,res)=>{
  const {id}=req.params;
  
  try {
    const singleUser=await user44.findByIdAndDelete({_id:id});
    res.status(201).json(singleUser)
  } catch (error) {
    res.status(500).json( {error:error.message})
  }

})

//update operation
router.patch("/:id",async(req,res)=>{
  const {id}=req.params;
  const {name,email,age}=req.body;
  
  try {
    const updateUser=await user44.findByIdAndUpdate(id,req.body,{new:true,});
    res.status(201).json(updateUser)
  } catch (error) {
    res.status(500).json( {error:error.message})
  }

})

 module.exports=router;