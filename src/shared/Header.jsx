import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
            <Container>
                <Navbar.Brand href="#home" className='text-bold fs-2 text-warning'>Gusto Meal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/' className=' fs-3 text-decoration-none text-warning text-bold'>Home</Link>
                        <Link to='#' className='ms-5 fs-3 text-decoration-none text-warning text-bold'>Blog</Link>
                        <Link to='#' className='ms-5 fs-3 text-decoration-none text-warning text-bold'>Contact</Link>
                    </Nav>
                    <Nav>
                        <FaUserCircle style={{fontSize: '40px'}}/>
                        <Link to='/login'><Button variant="outline-warning">Log Out</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;