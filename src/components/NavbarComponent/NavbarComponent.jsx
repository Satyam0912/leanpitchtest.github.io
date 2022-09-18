import React from 'react';
import './NavbarComponent.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assests/navLogo.png';


const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-0'>
            <Container fluid>
                <Navbar.Brand href="#home" className='center'>
                    <img
                        src={logo}
                        height="70"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    Leanpitch</Navbar.Brand>
                <Nav className='navbar-menu center' >
                    <Nav.Link href="#subscribe" >Subscribe</Nav.Link>
                    <Nav.Link href="#contact" >Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent