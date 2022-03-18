import React from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const NavbarIndex = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Partes de la cabeza" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/page1">Parte 1</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/page2">Parte 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>  
  </Navbar.Collapse> 
  </Container>
</Navbar>
    </>
  )
}

export default NavbarIndex