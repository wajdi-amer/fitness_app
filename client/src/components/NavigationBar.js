import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>
          <img src='https://i.ibb.co/dgvL3qw/fitness-logo.png'
            width='160px'
            alt="running-man logo"
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ fontSize: 19 }}>Home</Nav.Link>
            <Nav.Link href="/nutrition" style={{ fontSize: 19 }}>Nutrition</Nav.Link>
            <NavDropdown title="Calculators" id="basic-nav-dropdown" style={{ fontSize: 19 }}>
              <NavDropdown.Item href="/bmr">BMR</NavDropdown.Item>
              <NavDropdown.Item href="/bmi">
                BMI
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;