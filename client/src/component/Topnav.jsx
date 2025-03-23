import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topnav = () => {
  return (
    <>
    {/* <h1 className='mybank'>Welcome To MyBank</h1> */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
      <img 
        src="image/logo-banking.png" 
        alt="MyBank Logo" 
        width="100" 
        height="40" 
        className="d-inline-block align-top"
      /> 
    </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       
    </>
  )
}

export default Topnav
