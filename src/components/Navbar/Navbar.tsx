import React from "react";

import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"

import "./navbar.css"

type MenuItem = Required<MenuProps>['items'][number]

const items = [
    {
        label: "Home",
        key: "home",
        icon: <HomeOutlined />
    }
]

function Navbar() {
    return (
        <>
            <div className="navbar">
                <nav className="navbar">
                    {/* <img src={} alt="Logo" className="logo"/> */}
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