const mongoose=require('mongoose');

const userSchma=mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    unique:true,
    require:true,
  },
  age:{
    type:Number,
    require:true,
  },
},{timestamps:true})



//creating  model
const user44=mongoose.model("user44",userSchma);
module.exports=user44;