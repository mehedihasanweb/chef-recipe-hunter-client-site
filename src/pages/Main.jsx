import React from 'react';
import { Container } from 'react-bootstrap';
import bannerImg from '../assets/bannerImg.jpg'
import './Main.css'
import Chef from './Chef';
import ClientSay from '../components/ClientSay';
import Question from '../components/Question';
const Main = () => {
    return (
        // <Container className='image'>
        //     <div className='text-white'>
        //         <h2 className='fs-1 '>A Chef In Every <br />Tasty Meal Box</h2>
        //         <p >Get pre-portioned ingredients for Gusto Meal Kits <br />best recipes delivered direct to your door!</p>
        //     </div>
        // </Container>
        <div>
            <section className='banner-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Gusto Meal</h1>
                            <p>Experience the ultimate dining experience with Gusto Meal</p>
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <Chef />
            <ClientSay />
            <Question />
        </div>
    );
};

export default Main;