import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import emblem from '../assets/odisha-emblem.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'WhatsApp Service', path: '/whatsapp-service' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={isScrolled ? 'top-nav scrolled' : 'top-nav'}>
      <div className="official-banner">
        <div className="container banner-flex">
          <div className="gov-links">
              </div>
          <div className="accessibility-links">
          
          </div>
        </div>
      </div>
      <div className="container nav-content">
        <NavLink to="/" className="logo-container">
          <img src={emblem} alt="Odisha Emblem" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">Collectorate Jharsuguda</span>
            <span className="logo-sub">Government of Odisha</span>
          </div>
        </NavLink>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
