const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();
 const  userRouter=require("../Backend/router/userRoute")
 const cors=require('cors');
 app.use(cors());



app.use(express.json())






//data base connection
mongoose.connect( process.env.URL)
.then(()=>{
  console.log("connected secussefully")
  app.listen(process.env.PORT||9000,( )=>{
    console.log(`your server is running on http://localhost:${process.env.PORT}`)
  });
})
.catch((err)=>{
  console.log("error",err);

})


app.use(userRouter);

 

 