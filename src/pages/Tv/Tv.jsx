import React, { useEffect, useState } from "react";
import "./default.css";
import filterChevron from "../../images/chevronRight.jpg";
import { dataconvert } from "../../repository/dataconvert";
import { SpinnerCircular } from "spinners-react";
import tvShows from "../../repository/tvShows";
import { Link, useNavigate } from "react-router-dom";

function Tv() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate()
  async function getPopularTvMovies() {
    const resp = await tvShows.getMoviesByName("popular?language=en-US&page=1");
    setPopularMovies(resp.results);
    setLoader(false);
  }

  useEffect(() => {
    getPopularTvMovies();
  }, []);

  function handlecliked(id) {
    navigate(`/tvnews/${id}`)
    console.log(id);
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
      <h2>Popular Movies</h2>
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
          {popularMovies?.map((item, index) => {
            return (
              <div onClick={() => handlecliked(item.id)} key={index} className="card">
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
                  <h1>{item.original_name}</h1>
                  <p>{dataconvert(item.first_air_date)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tv;
