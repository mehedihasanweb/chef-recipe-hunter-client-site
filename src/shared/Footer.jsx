import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer  className="bg-dark text-light p-5 mt-5">
            <Container >
                <Row>
                    <Col md={4}>
                        <h3>Gusto</h3>
                        <p>123 Main St<br />Anytown, Bangladesh</p>
                        <p>Phone: 01534134134<br />Email: info@gusto.com</p>
                    </Col>
                    <Col md={4}>
                        <h3>Hours</h3>
                        <p>Monday - Friday: 11am - 10pm<br />Saturday - Sunday: 9am - 11pm</p>
                    </Col>
                    <Col md={4}>
                        <h3>Connect with Us</h3>
                        <ul className="list-inline">
                            <li className="list-inline-item"><FaFacebook style={{fontSize: '30px'}}/></li>
                            <li className="list-inline-item ms-3"><FaTwitter style={{fontSize: '30px'}}/></li>
                            <li className="list-inline-item ms-3"><FaInstagram style={{fontSize: '30px'}}/></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;