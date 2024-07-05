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
            <Nav className="fw-bold navhome">
            {isAuthorized?
                        <NavDropdown title="Dashboard" id="collapsible-nav-dropdown">
                        <Link to = '/profile'><NavDropdown.Item href="#action/3.1">Myprofile</NavDropdown.Item></Link>
                        <Link to = '/booking'><NavDropdown.Item href="#action/3.2">Mybookings</NavDropdown.Item></Link>
                        </NavDropdown>:null}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Packages" id="collapsible-nav-dropdown">
                <Link to = '/packagepage'><NavDropdown.Item href="#action/3.1">Friends Package</NavDropdown.Item></Link>
                <Link to = '/packagepage'><NavDropdown.Item href="#action/3.2">Honeymoon Package</NavDropdown.Item></Link>
                <Link to = '/packagepage'><NavDropdown.Item href="#action/3.3">Temple Package</NavDropdown.Item></Link>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Picnic" id="collapsible-nav-dropdown">
                <Link to = '/picnicpage'><NavDropdown.Item href="#action/3.1">Tamil Nadu</NavDropdown.Item></Link>
                <Link to = '/picnicpage'><NavDropdown.Item href="#action/3.2">Kerala</NavDropdown.Item></Link>
                <Link to = '/picnicpage'><NavDropdown.Item href="#action/3.3">Goa</NavDropdown.Item></Link>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Offers" id="collapsible-nav-dropdown">
                <Link to = '/offerpage'><NavDropdown.Item href="#action/3.1">Offer 1</NavDropdown.Item></Link>
                <Link to = '/offerpage'><NavDropdown.Item href="#action/3.2">Offer 2</NavDropdown.Item></Link>
                <Link to = '/offerpage'><NavDropdown.Item href="#action/3.3">Offer 3</NavDropdown.Item></Link>
              </NavDropdown>
              <NavDropdown title="Blog" id="collapsible-nav-dropdown">
                <Link to = '/blogpage'><NavDropdown.Item href="#action/3.1">Blog 1</NavDropdown.Item></Link>
                <Link to = '/blogpage'><NavDropdown.Item href="#action/3.2">Blog 2</NavDropdown.Item></Link>
                <Link to = '/blogpage'><NavDropdown.Item href="#action/3.3">Blog 3</NavDropdown.Item></Link>
              </NavDropdown>
              <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
            </Nav>
            <Nav className="fw-bold">
              {
                !isAuthorized?<Nav.Link as={Link} to="/login">Login</Nav.Link>:
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              }
              <Nav.Link eventKey={2} href="#memes" className="">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
