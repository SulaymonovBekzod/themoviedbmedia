import React, { useContext, useEffect, useState } from "react";
import movies from "../../repository/movies";
import "./default.css";

import filterChevron from "../../images/chevronRight.jpg";
import { dataconvert } from "../../repository/dataconvert";
import { SpinnerCircular } from "spinners-react";
import { LangContext } from "../../components/Context/Context";
import { useNavigate } from "react-router-dom";
function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const { language } = useContext(LangContext)
  const navigateMovie = useNavigate()
  async function getupcomingMovies() {
    const resp = await movies.getMoviesByName(`upcoming?language=${language}-US&page=1`);
    setUpcomingMovies(resp.results);
    setLoader(false);
  }

  useEffect(() => {
    getupcomingMovies();
  }, []);

  function clickedMovie(id) {
    navigateMovie(`/moviesdb/${id}`)
  }

  if (loader) {
    return (
      <div className="loader">
        <SpinnerCircular
          size={100}
          thickness={100}
          speed={100}
          color="#000"
          secondaryColor="rgba(0, 0, 0, 0.3)"
        />
      </div>
    );
  }
  return (
    <div className="moviesContainer">
      <h2>Upcoming Movies</h2>
      <div className="moviesWrapper">
        <div className="moviesFilter">
          <div className="sort">
            <h3>Sort</h3>
            <img src={filterChevron} alt="filter chevron" />
          </div>
          <div className="sort">
            <h3>Filters</h3>
            <img src={filterChevron} alt="filter chevron" />
          </div>
          <button className="filterSearch">Search</button>
        </div>
        <div className="moviesCards">
          {upcomingMovies?.map((item, index) => {
            return (
              <div
                onClick={() => clickedMovie(item.id)} key={index} className="card"
              >
                <span className="material-symbols-outlined moreIcon">
                  more_horiz
                </span>
                <img
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`}
                  alt=""
                />
                <div className="cardBody">
                  <span>
                    {Math.round(item.vote_average * 10)}
                    <p>
                      <sup>%</sup>
                    </p>
                  </span>
                  <h1>{item.original_title}</h1>
                  <p>{dataconvert(item.release_date)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
