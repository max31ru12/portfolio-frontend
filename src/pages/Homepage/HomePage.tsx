import React from 'react'

import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar.tsx';
import "./homepage.css"


function HomePage() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default HomePage;
