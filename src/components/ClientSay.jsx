import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ClientSay = () => {

    return (
        <section className='bg-dark mt-5 p-5 text-white'>
            <Container>
                <h2 className='text-center text-bold'>What Our Clients Say</h2>
                <Row className='my-5' xs={1} md={2} lg={3}>
                    <Col>
                        <h3>Name: Ahmed Ali</h3>
                        <p>Description: I can not say enough good things about this service. It is made my life so much easier and I recommend it to everyone I know.</p>
                        <h5>JobTitle: Business Owner</h5>
                    </Col>
                    <Col>
                        <h3>Name: Hassan Ahmed </h3>
                        <p>Description: I had an amazing experience with this company. They really went above and beyond to help me out..</p>
                        <h5>JobTitle: Business Owner</h5>
                    </Col>
                    <Col>
                        <h3>Name: Kabir Ali</h3>
                        <p>Description: I have been using this service for months and it is been great. The team is always responsive and helpful.</p>
                        <h5>JobTitle: Business Owner</h5>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ClientSay;