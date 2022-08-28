import React from "react";
import {  Link } from "react-router-dom";

const Nav=()=>{
  const auth=localStorage.getItem('user');

    return (
       <>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            
            <Link to="/"  className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                   
                    <li className="nav-item">
                        <Link to="/"  className="nav-link">prouducts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add_products"  className="nav-link">Add Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/update_products"  className="nav-link">Update Products</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/profile"  className="nav-link">Profile</Link>
                    </li>
                    {auth ?
                    <li className="nav-item">
                        <Link to="/logout"  className="nav-link">Logout</Link>
                    </li>
                     : 
                     <>
                     <li className="nav-item">
                        <Link to="/login"  className="nav-link">Login</Link>
                    </li> 
                    <li className="nav-item">
                        <Link to="/signup"  className="nav-link">Sign Up</Link>
                    </li> 
                     </>
                    }
                    
                </ul>
            </div>  
            </nav>
       </>
    )
}

export default Nav;