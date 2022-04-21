import React from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../components/assets/css/NavbarIndex.css'

const NavbarIndex = ({ information }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Neurocráneo" id="collasible-nav-dropdown" className='separated-links'>
                <NavDropdown.Item as={Link} to="/neurocraneo/frontal">Hueso Frontal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/neurocraneo/parietal">Hueso Parietal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/neurocraneo/temporal">Hueso Temporal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/neurocraneo/pterigoides">Hueso Pterigoides</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/neurocraneo/occipital">Hueso Occipital</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/neurocraneo/esfenoides">Hueso Esfenoides</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/neurocraneo/etmoides">Hueso Etmoides</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Vicerocráneo" id="collasible-nav-dropdown" >
                <NavDropdown.Item as={Link} to="/viscerocraneo/incisivo">Hueso Incisivo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/viscerocraneo/nasal">Hueso Nasal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/viscerocraneo/maxilar">Hueso Maxilar</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/viscerocraneo/lagrimal">Hueso Lagrimal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/viscerocraneo/cigomatico">Hueso Cigomático</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/viscerocraneo/mandibula">Hueso Mandíbula</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/viscerocraneo/palatino">Hueso Palatino</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/viscerocraneo/vomer">Hueso Vómer</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link as={Link} to="/galeria" className='separated-links'>Galería</Nav.Link>
            <Nav.Link as={Link} to="/bibliografia" className='separated-links'>Bibliografía</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarIndex