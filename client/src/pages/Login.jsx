import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import BASE_URL from '../config/Api';
import axios from 'axios';
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"; 
// import "../CSS/login.css"
 
const Login = () => {

   const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const nav = useNavigate();



    const handleSubmit=async(e)=>{
      e.preventDefault();
        let api = `${BASE_URL}/customer/login`

        try {
        
            const response = await axios.post(api, {email:email, password:password})
            console.log(response);
            
            localStorage.setItem("token" , response.data.token);
            localStorage.setItem("name", response.data.customer.firstname)
            localStorage.setItem("email", response.data.customer.email)
            localStorage.setItem("custId", response.data.customer._id)
            
            toast.success("Login Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            });

            nav("/dashboard")
            
        } 
        catch (error) {
            console.log(error);
            alert(error.response.data)
        }
    }

  

  return (
    <>
    <div className='body'>
    <div className='pad'>
    <h1 className='loginTitle'>Account <span>Login</span></h1>
       <Form id='homeform'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <Button className='custom-button' style={{backgroundColor:"#00796b",border:"none"}} variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
      <br />
      <div className='linkk'>if you don't have Account <Link to="/registration">Open new Account</Link></div>
    </Form>
    </div>
    </div>
    </>
  )
}

export default Login