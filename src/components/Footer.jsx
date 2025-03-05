import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Discover the best restaurants in Hyderabad with our curated list of top dining spots. 
            Whether you're looking for authentic Hyderabadi biryani, spicy Andhra cuisine, or 
            international flavors, we bring you the best options for a delightful experience.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Top Restaurants</a></li>
            <li><a href="#">Best Deals</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><strong>Address:</strong> 123, Food Street, Hyderabad, India</p>
          <p><strong>Email:</strong> support@foodexplore.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Business Hours:</strong> Mon-Sat: 9 AM - 9 PM</p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get updates on new restaurants, deals, and special offers straight to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Food Explore. All rights reserved.</p>
      </div>
    </footer>
  );
}
