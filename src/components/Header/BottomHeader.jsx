import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/Logo.png';
import './header.css';
import { Context } from '../context';
import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link,useNavigate} from 'react-router-dom';

function CollapsibleExample() {
  const { theme, setTheme,isAuthorized,setIsAuthorized,setUser } = useContext(Context);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const navigate = useNavigate();

  function handletheme() {
    setTheme(!theme);
  }

  function handleToggle() {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  }
  const handleLogout = () => {
    setIsAuthorized(false);
    setUser({});
    localStorage.removeItem('jwtToken');
    navigate('/');
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`position-fixed w-100 zz ${theme ? "navbar-dark" : null}`}>
        <Container className = 'navb'>
          <Navbar.Brand href="/">
            <img src={Logo} alt="" className='logoimg' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle}>
            {isNavbarCollapsed ? <FaBars /> : <FaTimes />}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-end ${isNavbarCollapsed ? 'collapse' : ''}`}>
            <Nav className=" navhome">
            {isAuthorized?
                        <NavDropdown title="Dashboard" id="collapsible-nav-dropdown">
                        <Link to = '/profile'><NavDropdown.Item href="#action/1.1">Myprofile</NavDropdown.Item></Link>
                        <Link to = '/booking'><NavDropdown.Item href="#action/1.2">Mybookings</NavDropdown.Item></Link>
                        </NavDropdown>:null}
            <Nav.Link href="#action/2.1" onClick={handleToggle} as={Link} to="/" className='text-dddd home'>Home</Nav.Link>
              <Nav.Link href="#action/2.2" as={Link} to = '/packagepage'onClick={handleToggle} className='text-dddd' id="collapsible-nav-dropdown">Packages</Nav.Link>
              <NavDropdown href="#action/3.1" title="Picnic" id="collapsible-nav-dropdown" className=''>
                <Link to = '/picnicpage' onClick={handleToggle}><NavDropdown.Item href="#action/3.1" className='text-dddd'>All Picnics</NavDropdown.Item></Link>
                <Link to = '/tamilnadupicnic'onClick={handleToggle} ><NavDropdown.Item href="#action/3.2">Tamil Nadu</NavDropdown.Item></Link>
                <Link to = '/keralapicnic' onClick={handleToggle}   ><NavDropdown.Item href="#action/3.3">Kerala</NavDropdown.Item></Link>
              </NavDropdown>
              <Nav.Link href="#action/4.1" as={Link} to = '/offerpage'className='text-dddd' id="collapsible-nav-dropdown" onClick={handleToggle}>Offer</Nav.Link>
              <Nav.Link href="#action/5.1" as={Link} to = '/blogpage' className='text-dddd' onClick={handleToggle}>Blog</Nav.Link>
              <Nav.Link href="#action/6.1" as={Link} to="/contactus" className='text-dddd' onClick={handleToggle}>Contact</Nav.Link>
            </Nav>
            <Nav className="">
              {
                !isAuthorized?<Nav.Link href="#action/7.1" className='text-dddd' onClick={handleToggle} as={Link} to="/login">Login</Nav.Link>:
                <Nav.Link href="#action/8.1" className='text-dddd' onClick={handleLogout}>Logout</Nav.Link>
              }
              <Nav.Link href="#action/9.1" as ={Link} to = '/login' className="text-dddd" onClick={handleToggle}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
