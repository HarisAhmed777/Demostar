import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/Logo.png';
import './header.css';
import { Context } from '../context';
import { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

function CollapsibleExample() {
  const { theme, setTheme } = useContext(Context);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  function handletheme() {
    setTheme(!theme);
  }

  function handleToggle() {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`d-flex justify-content-between position-fixed w-100 z-2 navb ${theme ? "navbar-dark" : null}`}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" className='logoimg' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle}>
            {isNavbarCollapsed ? <FaBars /> : <FaTimes />}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className={`justify-content-end ${isNavbarCollapsed ? 'collapse' : ''}`}>
            <Nav className="me-auto fw-bold navhome">
              <Nav.Link href="#features">Home</Nav.Link>
              <NavDropdown title="About US" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About our company</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Packages" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Friends Package</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Honeymoon Package</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Temple Package</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Picnic" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tamil Nadu</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Kerala</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Goa</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Offers" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Offer 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Offer 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Offer 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Trips" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Trip 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Trip 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trip 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blog 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Blog 4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Contact</Nav.Link>
              {/*   <Nav.Link onClick={handletheme}>themebutton</Nav.Link> */}
            </Nav>
            <Nav className="fw-bold">
              <Nav.Link href="#deets" className="">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;
