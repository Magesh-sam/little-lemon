import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLemon } from '@fortawesome/free-regular-svg-icons'

function Header() {
  return (
    <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h3> <FontAwesomeIcon className='lllogo' icon={faLemon} /> Little Lemon</h3>
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link className='nav-items' href="#">Home</Nav.Link>
            <Nav.Link className='nav-items' href="#">About</Nav.Link>
            <Nav.Link className='nav-items' href="#">Menu</Nav.Link>
            <Nav.Link className='nav-items' href="#">Reservations</Nav.Link>
            <Nav.Link className='nav-items' href="#">Order Online</Nav.Link>
            <Nav.Link className='nav-items' href="#">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header