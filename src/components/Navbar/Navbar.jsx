import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import Plus from '../../../src/images/Plus_img.jpg'
function Navbar() {
  const navbarMenuData = [
    {
      text: (
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt=""
        />
      ),
      path: "/",
    },
    {
      text: "Movies",
      path: "/movies",
    },
    {
      text: "Tv Shows",
      path: "/tv",
    },
    {
      text: "People",
      path: "/people",
    },
    {
      text: "More",
      path: "/more",
    },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <ul className="navbar-wrapper-menu">
            {navbarMenuData.map((nav_menu, index) => {
              return (
                <li className="navbar-wrapper-menu-item" key={index}>
                  <Link
                    to={nav_menu.path}
                    className="navbar-wrapper-menu-item-link"
                  >
                    {nav_menu.text}
                  </Link>
                </li>
              );
            })}
            <img className="plus_img" src={Plus} alt="" />
            <img className="minus_img" src="https://www.pngitem.com/pimgs/m/67-679828_white-plus-png-plus-icon-white-png-transparent.png" alt="" />
            <img className="valakida" src="https://i.pinimg.com/736x/35/68/0a/35680a4adc8c43f8c1111c642bd416c6.jpg" alt="" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
