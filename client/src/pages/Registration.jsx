import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../config/Api';
import axios from "axios"

const Registration = () => {

  const[input, setInput] = useState({})
  const nav = useNavigate();

  const handleInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);
        
    }

    const handleSubmit = async(e)=>{
      e.preventDefault;
      let api = `${BASE_URL}/customer/registration`
      
      try {
        let response = await axios.post(api, input);
        console.log(response.data);
        nav("/login")

      } catch (error) {
        console.log(error);
        
      }
    }

  return (
    <>
    <div className='body'>
    <div className='pad'>
      <h1 className='loginTitle'>Create <span>Account</span></h1>
      <Form id='homeform'>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>First Name</Form.Label>
  <Form.Control type="text" name='fname' placeholder="Enter your first name" onChange={handleInput} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Last Name</Form.Label>
  <Form.Control type="text" name='lname' placeholder="Enter your last name" onChange={handleInput} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Mobile No.</Form.Label>
  <Form.Control type="text" name='mobile' placeholder="Enter your mobile number" onChange={handleInput} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Full Address</Form.Label>
  <Form.Control type="text" name='address' placeholder="Enter your full address" onChange={handleInput} />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>City</Form.Label>
  <Form.Control type="text" name='city' placeholder="Enter your city" onChange={handleInput} />
</Form.Group>
      
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" name='email' placeholder="Enter your email address" onChange={handleInput} /> 
</Form.Group>

  <Button className='button' style={{backgroundColor:"#00796b",border:"none"}} variant="primary" onClick={handleSubmit}>
    Submit
  </Button>
  <div className='linkk'>Already have an Account? Click here: <Link to={'/login'}>Login</Link></div>
</Form>
</div>
</div>
    </>
  )
}

export default Registration
