import React from 'react'

import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
   <div id='bank-img'></div>
   
    {/* Hero Section */}
<Container fluid className="hero-section text-center">
    <h1>Welcome to E-Banking</h1>
    <p>Secure & Fast Banking Experience</p>
</Container>

{/* Features Section */}
<Container className="features-section">
    <Row className="g-4">
        <Col md={4}>
            <Card className="feature-card text-center shadow">
                <Card.Body>
                    <Card.Title>Secure Transactions</Card.Title>
                    <Card.Text>All your transactions are end-to-end encrypted.</Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card className="feature-card text-center shadow">
                <Card.Body>
                    <Card.Title>24/7 Support</Card.Title>
                    <Card.Text>Get support anytime, anywhere.</Card.Text>
                    <Button variant="primary">Contact Us</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card className="feature-card text-center shadow">
                <Card.Body>
                    <Card.Title>Easy Payments</Card.Title>
                    <Card.Text>Instant money transfer with just one click.</Card.Text>
                    <Button variant="primary">Start Now</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>

    </>
  )
}

export default Home
