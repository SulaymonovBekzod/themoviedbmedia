import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { LangContext } from "../Context/Context";

function Navbar() {
  const { language, setLanguage } = useContext(LangContext);

  const moviesToggleData = [
    { text: "Popular", path: "/movies" },
    { text: "Now playing", path: "/movies/now_playing" },
    { text: "Upcoming", path: "/movies/upcoming" },
    { text: "Top Rated", path: "/movies/top_rated" },
  ];

  const tvShowToggleData = [
    { text: "Popular", path: "/tv" },
    { text: "Airing today", path: "/tv/airing-today" },
    { text: "On TV", path: "/tv/on-the-air" },
    { text: "Top Rated", path: "/tv/top-rated" },
  ];

  const peopleToggleData = [{ text: "Popular people", path: "/people" }];

  const navbarMenuData = [
    {
      text: (
        <img
          className="themoviedborg_img"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="TMDB Logo"
        />
      ),
      path: "/",
    },
    { text: "Movies", path: "/movies" },
    { text: "TV Shows", path: "/tv" },
    { text: "People", path: "/people" },
    { text: "More", path: "/more" },
  ];

  return (
    <div className="navbar">
      <div className="navbarRow">
        <div className="navbar-wrapper">
          <ul className="navbar-wrapper-menu">
            {navbarMenuData.map((navMenu, index) => (
              <li className="navbar-wrapper-menu-item" key={index}>
                <Link to={navMenu.path} className="navbar-wrapper-menu-item-link">
                  {navMenu.text}
                </Link>
                {navMenu.text === "Movies" && <ToggleMenu data={moviesToggleData} />}
                {navMenu.text === "TV Shows" && <ToggleMenu data={tvShowToggleData} />}
                {navMenu.text === "People" && <ToggleMenu data={peopleToggleData} />}
              </li>
            ))}
          </ul>
        </div>
        <div className="rightUser">
          <button className="btn_translate" onClick={() => setLanguage(language === "ru" ? "en" : "ru")}>
            {language === "ru" ? "EN" : "RU"}
          </button>
          {/* <img className="call_img" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff.svg" alt="Notifications" /> */}
          <p className="profile">S</p>
        </div>
      </div>
    </div>
  );
}

const ToggleMenu = ({ data }) => (
  <div className="moviesToggle">
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
