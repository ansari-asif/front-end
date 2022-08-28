import React,{useEffect, useState} from 'react';
import "./App.css";
import {useNavigate} from "react-router-dom";


const SignUp = () => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    },[])
    const collectData=async ()=>{
        
        let result=await fetch("http://localhost:5000/register",{
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json",
            }
        });
       result=await result.json();
        if (result) {
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        }

    }
  return (
    <div>
        <div className='w-50 m-auto register_form'>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>                
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>                
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>        
            <button onClick={collectData} type="submit" className="btn btn-primary">Submit</button>
        </div>        
    </div>
  )
}

export default SignUp