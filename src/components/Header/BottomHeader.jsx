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
      <Navbar collapseOnSelect expand="lg" className={`position-fixed w-100 z-2  ${theme ? "navbar-dark" : null}`}>
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
                        <Link to = '/profile'><NavDropdown.Item href="#action/3.1">Myprofile</NavDropdown.Item></Link>
                        <Link to = '/booking'><NavDropdown.Item href="#action/3.2">Mybookings</NavDropdown.Item></Link>
                        </NavDropdown>:null}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to = '/packagepage'>Packages</Nav.Link>
              <NavDropdown title="Picnic" id="collapsible-nav-dropdown">
                <Link to = '/picnicpage'><NavDropdown.Item href="#action/3.1">All Picnics</NavDropdown.Item></Link>
                <Link to = '/tamilnadupicnic'><NavDropdown.Item href="#action/3.2">Tamil Nadu</NavDropdown.Item></Link>
                <Link to = '/keralapicnic'><NavDropdown.Item href="#action/3.3">Kerala</NavDropdown.Item></Link>
              </NavDropdown>
              <Nav.Link as={Link} to = '/offerpage'>Offer</Nav.Link>
              <Nav.Link as={Link} to = '/blogpage'>Blog</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
            </Nav>
            <Nav className="">
              {
                !isAuthorized?<Nav.Link as={Link} to="/login">Login</Nav.Link>:
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              }
              <Nav.Link as ={Link} to = '/login' className="">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
