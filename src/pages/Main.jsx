import React from 'react';
import './Main.css'
import Chef from './Chef';
import ClientSay from '../components/ClientSay';
import Question from '../components/Question';

const Main = () => {
    return (
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