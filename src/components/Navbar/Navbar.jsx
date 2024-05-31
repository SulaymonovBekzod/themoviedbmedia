import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import Plus from '../../../src/images/Plus.jpg'
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
            <div>
              <img className="plus_img" src={Plus} alt="" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
