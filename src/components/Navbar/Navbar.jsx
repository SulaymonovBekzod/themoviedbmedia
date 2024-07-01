import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import { LangContext } from "../Context/Context";

function Navbar() {
  const { language, setLanguage } = useContext(LangContext)
  const navbarMenuData = [
    {
      text: (
        <img className="themoviedborg_img"
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
      <div className="navbarRow">
        <div className="navbar-wrapper">
          <ul className="navbar-wrapper-menu">
            {navbarMenuData.map((nav_menu, index) => {
              return (
                <li className="navbar-wrapper-menu-item" key={index}>
                  <Link
                    to={nav_menu.path}
                    className="navbar-wrapper-menu-item-link">
                    {nav_menu.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button className="btn_translate" onClick={() => setLanguage(language === "ru" ? "en" : "ru")}>{language === "ru" ? "EN" : "RU"}</button>
          <img className="call_img" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff.svg" alt="" />
          <p className="profil">S</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
