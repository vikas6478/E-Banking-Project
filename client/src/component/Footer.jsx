import React from 'react'
import "../CSS/footer.css"


const Footer = () => {
  return (
    <>
   <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo-section">
          <img src="/image/logo-banking.png" alt="E-Banking Logo" className="footer-logo" />
        </div>

        {/* 4 Columns */}
        <div className="footer-columns">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Providing secure and modern banking solutions for everyone.</p>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <p>Email: support@ebanking.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <p>Online Banking</p>
            <p>Loan Assistance</p>
            <p>24/7 Customer Support</p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 E-Banking. All Rights Reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer
