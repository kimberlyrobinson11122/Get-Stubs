import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import Auth from "../utils/auth";

import "../assets/css/Navbar.css";

const menuItems = [
  { name: "Home", url: `/` },
  { name: "Profile", url: `/profile` },
  { name: "Groove", url: `/groove` },
  { name: "Admin", url: `/admin` }
];

const NavList = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const user = Auth.getProfile(); // Check user login state

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout(); // Log user out
    // alert("You have been logged out.");
    navigate('/'); // Redirect to home page
  };

  return (
    <nav className="nav">
      <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
        <ul className="nav nav__list">
          {menuItems
            .filter(item => item.name !== "Admin" || user) // Only show Admin if user is logged in
            .map(item => (
              <li className="nav__item" key={item.name}>
                <NavLink to={item.url} className="nav__link"
                activeclassname="active"
                onClick={closeMenuOnMobile}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          {user ? (
            <li className="nav__item">
              <button onClick={handleLogout} className="nav__link">
                Logout
              </button>
            </li>
          ) : (
            <li className="nav__item">
              <NavLink to="/login" className="nav__link active" onClick={closeMenuOnMobile}>
                Login
              </NavLink>
            </li>
          )}
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
};

export default NavList;
