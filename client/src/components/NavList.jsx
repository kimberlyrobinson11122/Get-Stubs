//import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import "../assets/css/Navbar.css";


const menuItems = ["Home", "Profile", "Groove"];

const NavList = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
          setShowMenu(false);
        }
    };

    return (
        <nav className="nav container">
            <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
                <ul className="nav nav__list">
                {
                    menuItems.map((item) => (
                        <li className="nav__item" key={item}>
                            <NavLink to={`/${item}`} className="nav__link" activeclassname="active" 
                            onClick={closeMenuOnMobile}>
                            {item}
                            </NavLink>
                        </li>
                    ))
                }
                </ul>

                <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                    <IoClose />
                </div>
            </div>
   
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                <IoMenu />
            </div>  
        </nav>
            
    );
}

export default NavList;