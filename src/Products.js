import React, { useEffect, useState } from 'react'

function Products() {

  const [product,setProdut]=useState([]);


  useEffect(() => {
    getProducts();
  }, [product])
  const getProducts=async()=>{
    let result=await fetch('http://localhost:5000/products')
    result =await result.json();
    setProdut(result);
  }
  console.warn(product)
  return (
    <div className='container mt-5'>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Sl No</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((item,index)=>
            <tr>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
            </tr>
            )
          }
          
          
        </tbody>
      </table>
    </div>
  )
}

export default Products