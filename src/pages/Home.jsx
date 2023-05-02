import React from 'react';
import './Home.css'
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
// import bannerImg from '../assets/bannerImg.jpg'

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;