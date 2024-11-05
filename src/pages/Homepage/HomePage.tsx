// @ts-ignore
import React from 'react'

import { Outlet } from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar.tsx";
import "./homepage.css"


function HomePage() {
    return (
        <>
            <Navbar />
            <div className="wrapper" style={{width: "75vw", margin: "auto"}}>
                <Outlet />
            </div> 
        </>
    )
}

export default HomePage;
