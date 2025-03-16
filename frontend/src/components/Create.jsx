import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

//maintaing data connection
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[age,setAge]=useState(0);
const[error,setError]=useState('');
const navigate=useNavigate();


console.log(name,email,age)

const handleSubmit=async (e)=>{
e.preventDefault();
const adduser={name,email,age}

const response =await fetch("https://your-backend.vercel.app",
  {
     method:"POST",
     body:JSON.stringify(adduser),
     headers:{
      "content-Type":"application/json",
     },
});

const result=await  response.json();
if(!response.ok){
  console.log(result.error);
  setError(result.error)
  
}if(response.ok){
  console.log(result)
  setError('');
  setEmail('');
  setAge('');
  setName('');
  navigate("/all")
}
}


  return (
    <div className='container my-2'  >
   
   {error && <div class="alert alert-primary">
  {error}
</div>
    }


<h2 className='text-center' >Enter the details here</h2>
    
<form   onSubmit={handleSubmit}   > 
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

export default Create
