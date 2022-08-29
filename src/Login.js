import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";


function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
        useEffect(()=>{
            const auth=localStorage.getItem('user');
                if (auth) {
                    navigate('/');
                }
            },[])
    const handleLogin=async()=>{
        let result=await fetch('http://localhost:5000/login',{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result=await result.json();
        console.log(result);
        if (result.auth) {
            localStorage.setItem('user',JSON.stringify(result.user));
            localStorage.setItem('auth',JSON.stringify(result.auth));
            navigate('/');
        }else{
            alert("Pls Entered Correct Details");
        }
    }
  return (
    <div>
        <div className='w-50 m-auto register_form'>            
            <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>                
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>        
            <button onClick={handleLogin} type="submit" className="btn btn-primary">Login</button>
        </div>        
    </div>
  )
}

export default Login