import React from "react";

import { Button } from "antd";
import { Link } from "react-router-dom"

import "./navbar.css"
import logo from "../../assets/logo-192.png" 

function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar">
                    <img src={logo} alt="Logo" className="logo"/>
                    <div className="desktop-menu">
                        <Link to="/" className="desktop-menu-item">Home</Link>
                        <Link to="/todo/" className="desktop-menu-item">TODO</Link>
                        <Link to="/skills/" className="desktop-menu-item">Skills</Link>
                        <Link to="/portfolio/" className="desktop-menu-item">Portfolio</Link>
                    </div>
                    <Button type="primary" size="large">Contact Me</Button>
                </nav>
            </div>
        </>
    )    
}

export default Navbar