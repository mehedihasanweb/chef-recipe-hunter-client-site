import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Main from '../pages/Main';
import Banner from './Banner';
import './RecipePage.css'


const RecipePage = () => {
    return (
        <div className='layout'>
            <Header />
            <Outlet/>
        </div>
    );
};

export default RecipePage;