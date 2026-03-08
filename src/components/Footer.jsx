import React from 'react';
import { Link } from 'react-router-dom';
import emblem from '../assets/odisha-emblem.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <img src={emblem} alt="Odisha Emblem" className="footer-logo" />
          <h3>Collectorate Jharsuguda</h3>
          <p>Official Portal of Jharsuguda District Administration, Government of Odisha.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About District</Link></li>
            <li><Link to="/administration">Administration</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/whatsapp-service">WhatsApp Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Policies</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>District Administration Jharsuguda</p>
          <p>Collectorate, Jharsuguda – 768204</p>
          <p>Phone: 06645-270070</p>
          <p>Email: dm-jharsuguda@nic.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} Collectorate Jharsuguda, Government of Odisha. All rights reserved.</p>
          <p>Website Designed & Developed by National Informatics Centre (NIC), Ministry of Electronics & IT.</p>
          <p className="last-updated-text">Last Updated: Feb 21, 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
