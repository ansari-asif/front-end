import React, { useState } from 'react'

function Add_product() {

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false);

    const add_product=async()=>{

        if (!name || !price || !category || !company) {
            
            setError(true)
            return false;
        }
        console.log(name,price,category,company);
        const user_details=localStorage.getItem('user');
        const userId=JSON.parse(user_details)._id;

        let result=await fetch('http://localhost:5000/add-product',{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }

        })

        result=await result.json();
        if (result._id) {
            alert('product added Successfully')
        }else{
            alert('Something went wrong')
        }
        
    }
  return (
    <div>
        <div className='w-50 m-auto register_form'>            
            <div className="form-group">
                <label for="">Product Name</label>
                <input type="text" className="form-control"  placeholder="Product Name" onChange={(e)=>setName(e.target.value)}/>    
                {error && !name && <span className='text-danger m-2'>Enter Name</span>}        
            </div>
            <div className="form-group">
                <label for="">Product Price</label>
                <input type="text" className="form-control"  placeholder="Product Price" onChange={(e)=>setPrice(e.target.value)}/>    
                {error && !price && <span className='text-danger m-2'>Enter price</span>}        

            </div>
            <div className="form-group">
                <label for="">Product Category</label>
                <input type="text" className="form-control"  placeholder="Product Category" onChange={(e)=>setCategory(e.target.value)}/> 
                {error && !category && <span className='text-danger m-2'>Enter Category</span>}        

            </div>
            <div className="form-group">
                <label for="">Product Company</label>
                <input type="text" className="form-control"  placeholder="Product Company" onChange={(e)=>setCompany(e.target.value)}/>  
                {error && !company && <span className='text-danger m-2'>Enter Company</span>}        

            </div>
            <button onClick={add_product} type="submit" className="btn btn-primary">Add</button>
        </div>        
    </div>
  )
}

export default Add_product