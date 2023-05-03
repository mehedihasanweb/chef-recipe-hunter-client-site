import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';

const RecipePage = () => {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    );
};

export default RecipePage;