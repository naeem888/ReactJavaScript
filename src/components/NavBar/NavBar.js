import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../../asset/images/logo.png';

import '../../asset/css/bootstrap.min.css';
import '../../asset/css/style.css';




class NavBar extends Component {
  render() {
    return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navmenus">
        <Container >
          <Navbar.Brand href="#home"><img src={LOGO} alt=''/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              

            </Nav>
            <Nav className="navlink ">
              <Nav.Link href="#deets" className='ones'>HOME</Nav.Link>
              <Nav.Link href="#deets">SERVICE</Nav.Link>
              <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
              <Nav.Link href="#deets">CONTACT</Nav.Link>
              <Nav.Link href="#deets">BLOG</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>

    


    </Fragment>
        
        


    );
  }
}
export default NavBar

