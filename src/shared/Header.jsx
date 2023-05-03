import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                            <Image style={{height: "50px",width: "50px", marginRight: "10px"}} src={user?.photoURL} roundedCircle data-toggle="tooltip" data-placement="top" title={user?.displayName}></Image>
                        <Link to='/login'><Button onClick={handleLogOut} variant="outline-warning">Log Out</Button></Link>
                        </div>: <Link to='/login'><Button variant="outline-warning">Log In</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;