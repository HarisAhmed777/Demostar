import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/Logo.png'
import './header.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary pt-5 d-flex justify-content-between position-fixed w-100 z-2 navb">
      <Container>
     
                <Navbar.Brand href="#home"><img src={Logo} alt="" className='logoimg' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto fw-bold navhome">
                <Nav.Link href="#features">Home</Nav.Link>
                <NavDropdown title="About US" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    About our company
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Packages" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Frends Package</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    HoneyMoon Package
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Temple Package</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Picnic" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Tamil Nadu</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Kerala
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Goa</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Offers" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">offer1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Offer2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Offer 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Trips" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Trip 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Trip 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Trip 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blog" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Blog 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Blog 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Blog 3</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Blog 4
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features">Contact</Nav.Link>

              </Nav>
              <Nav className='fw-bold'>
                <Nav.Link href="#deets" className='text-center ms-3'>Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" className='text-center ms-3'>
                  Sign Up
                </Nav.Link>
               
              </Nav>
              </Navbar.Collapse>
            
        
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;