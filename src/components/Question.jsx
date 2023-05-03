import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Question = () => {
    return (
        <Container className='mt-5'>
            <Row xs={1} lg={3} className='mb-5 '>
                <Col className='text-center'>
                    <h2 className='text-bold'>Frequently <br />Asked Question</h2>
                </Col>
                <Col className='text-center py-2'>
                    <p>Check out our frequently asked <br />question for answers.</p>
                </Col>
                <Col className='text-center'>
                    <button className='btn btn-warning'>Contact Us</button>
                </Col>
            </Row>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What does Gusto Meal kit delivery service word?</Accordion.Header>
                    <Accordion.Body>
                        Our meal delivery service allows you to skip meal planning and grocery shopping HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How much does Gusto Cost?</Accordion.Header>
                    <Accordion.Body>
                        Gusto is a cloud-based HR, payroll, benefits, and compliance management software designed for small businesses. The cost of Gusto depends on the specific plan you choose and the number of employees you have. Here is an overview of Gusto is pricing:Core Plan: $39 per month base price + $6 per person per month
                        The Core Plan includes full-service payroll, employee self-service, health benefits, workers comp administration, and compliance support.
                        Complete Plan: $39 per month base price + $12 per person per month
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Why choose Gusto for your meal kit service?</Accordion.Header>
                    <Accordion.Body>
                    Here are some reasons why you might consider using Gusto for your meal kit service:Streamlined Payroll: Gusto offers full-service payroll management, which means they take care of all payroll taxes and filings for you. This can save you time and reduce the risk of errors or penalties.Benefits Management: Gusto also offers health insurance and other benefits options, which can be important for a small business that wants to attract and retain top talent.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Question;