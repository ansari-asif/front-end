import React ,{useEffect} from "react";
import { BrowserRouter as Router ,Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import SignUp from "./SignUp";
import Login from "./Login";
import PrivateComponent from "./PrivateComponent";
import "./App.css";
import {useNavigate} from "react-router-dom";

function App() {
  
  
  return (
    <>
    <Router>
    <Nav />
      <Routes>
        {/* <Route element={<PrivateComponent/>}> */}
        <Route path="/" element={<h1>Product listing component</h1>} />
        <Route path="/add_products" element={<h1>add_products</h1>} />
        <Route path="/update_products" element={<h1>update_products</h1>} />
        <Route path="/logout" element={<h1>logout</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/> }/>
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path="/signup" element={<SignUp/> }/>
        {/* </Route> */}
      </Routes>
    </Router>
      
    </>
  );
}

export default App;