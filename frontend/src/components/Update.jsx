import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
const[name,setName]= useState("");
const[email,setEmail]=useState("");
const[age,setAge]=useState(0);
const[error,setError]=useState('');
const navigate= useNavigate();

const{id}=useParams();


//getting single user data
const getSingleUser=async ()=>{
  const response=await fetch(`https://your-backend.vercel.app/${id}`);

  const result=await response.json();

  if(!response.ok){
    console.log(result.error);
    setError(result.error);
  }
  if(response.ok){
    setError('');
    console.log("updated data",result)
    setName(result.name);
    setEmail(result.email);
    setAge(result.age);

  }
 }

 //sending updated data to database
 const handleUpdate=async (e)=>{
  e.preventDefault();
  const updatedUser={name,email,age}
  
  const response =await fetch(`https://your-backend.vercel.app/${id}`,
    {
       method:"PATCH",
       body:JSON.stringify(updatedUser),
       headers:{
        "content-Type":"application/json",
       },
  });
  
  const result=await  response.json();
  if(!response.ok){
    console.log(result.error);
    setError(result.error)
    
  }if(response.ok){
   setError('');
    navigate("/all")
  }
  }
  

useEffect(()=>{
  getSingleUser();
},[])

  return (
    <div className='container my-2'  >
   
    {error && <div className="alert alert-primary">
   {error}
 </div>
     }
 
 
 <h2 className='text-center' >Edit the details here</h2>
     
 <form  onSubmit={handleUpdate} > 
 <div className="mb-3">
     <label  className="form-label">Name</label>
     <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
   </div>
   
   <div className="mb-3">
     <label  className="form-label">Email address</label>
     <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
     
   </div>
   <div className="mb-3">
     <label  className="form-label">Age</label>
     <input type="Number" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)} />
   </div>
   
   <button type="submit" className="btn btn-primary">Submit</button>
 </form>
 
      </div>
   )
  
}

export default Update
