import React, { useContext, useEffect, useState } from "react";
import movies from "../../repository/movies";
import "./movies.css";
import filterchevron from "../../images/chevronRight.jpg"
import { LangContext } from "../../components/Context/Context";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate()
  const { language } = useContext(LangContext)
  async function getPopularMovies() {
    const resp = await movies.getMoviesByName(`popular?language=${language}-US&page=1`);
    setPopularMovies(resp.results);
  }

  useEffect(() => {
    getPopularMovies();
  }, [language]);

  function MoviesById(id) {
    navigate (`/movie/${id}`)
  }

  return (
    <div className="popular_movies">
      <div className="sidebar_movie">
        <h1>Popular Movies</h1>
        <div className="moviesFilter">
          <div className="sort">
            <h3 className="sort2">Sort</h3>
            <img src={filterchevron} alt="filter chevron" />
          </div>
          <div className="sort">
            <h3 className="sort3">Filters</h3>
            <img src={filterchevron} alt="filter chevron" />
          </div>
          <button className="filterSearch">Search</button>
        </div>
      </div>
      <div className="wrapper">
        {popularMovies?.map((item, index) => {

          let release_date = item.release_date
          let release_date2 = new Date(release_date).toLocaleDateString();

          return <div onClick={() => MoviesById(item.id)} className="card" key={index}>
            <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />  
            <h4 className="original_title">{item.title}</h4>
            <span>{release_date2}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Movies;
