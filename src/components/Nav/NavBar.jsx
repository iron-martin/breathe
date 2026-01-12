import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import martinFierro from '../../assets/img/martinFierro.jpg';
import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled" : ""} id='navbar' fixed='top'>
      <Container className='menu'>
        <div className="navbar-content">
          {/* Logo */}
          <Navbar.Brand href="https://github.com/iron-martin" target='_blank' className='logo'>
            <img src={martinFierro} 
              alt="Martin Fierro Logo" 
              className='logo-img'/>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          {/* Menú de navegación */}
          <Navbar.Collapse id="basic-navbar-nav" className='nav-menu'>
            <Nav className="nav-items">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>home</Nav.Link>
      
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};