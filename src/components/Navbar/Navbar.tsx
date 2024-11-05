import React, {useState} from "react";

import type {MenuProps} from "antd";
import {Menu} from "antd";
import {AreaChartOutlined, HomeOutlined, LoginOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom"

import "./navbar.css"


type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
    {
        label: <Link to="/" style={{color: "gold", fontSize: "1.5rem"}}
                     className="desktop-menu-item">Home</Link>,
        key: "home",
        icon: <HomeOutlined style={{color: "gold", fontSize: "1.5rem"}}/>
    },
    {
        label: <Link to="/todo/" style={{color: "gold", fontSize: "1.5rem"}}
                     className="desktop-menu-item">TodoList</Link>,
        key: "todo",
        icon: <MenuUnfoldOutlined style={{color: "gold", fontSize: "1.5rem"}}/>
    },
    {
        label: <Link to="/skills/" style={{color: "gold", fontSize: "1.5rem"}}
                     className="desktop-menu-item">Skills</Link>,
        key: "skills",
        icon: <AreaChartOutlined style={{color: "gold", fontSize: "1.5rem"}}/>
    },
    {
        label: <Link to="/signup/" style={{color: "gold", fontSize: "1.5rem"}}
                     className="desktop-menu-item">Signup</Link>,
        key: "signup",
        icon: <LoginOutlined style={{color: "gold", fontSize: "1.5rem"}}/>
    }

]

function Navbar() {

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <Menu style={{backgroundColor: "#001529"}} onClick={onClick} selectedKeys={[current]} mode="horizontal"
                  items={items}/>;
        </>
    )
}


export default Navbar