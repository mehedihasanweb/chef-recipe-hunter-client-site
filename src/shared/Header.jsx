import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import "./Header.css"


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
            <Container>
                <Navbar.Brand href="#home" className='text-bold fs-2 text-warning'>Gusto Meal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        
                        <NavLink to='/' style={{marginLeft: '10px', textDecoration: "none", fontSize: '20px'}} className={({ isActive }) => isActive ? "primary" : ''} >Home</NavLink>
                        <NavLink to='/blog' style={{marginLeft: '10px', textDecoration: "none", fontSize: '20px'}} className={({ isActive }) => isActive ? "primary" : ''} >Blog</NavLink>
                    </Nav>
                    <Nav>
                        {user ? <div>
                            <FaUserCircle style={{ fontSize: '40px' }} />
                        <Link to='/login'><Button onClick={handleLogOut} variant="outline-warning">Log Out</Button></Link>
                        </div>: <Link to='/login'><Button variant="outline-warning">Log In</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;