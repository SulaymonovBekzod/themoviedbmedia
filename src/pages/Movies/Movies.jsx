import React, { useEffect, useState } from "react";
import movies from "../../repository/movies";
import "./movies.css";
import filterchevron from "../../../src/images/chevronRight.jpg"

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);

  async function getPopularMovies() {
    const resp = await movies.getMoviesByName("popular");
    setPopularMovies(resp.results);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);
  console.log(popularMovies);

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


          return <div className="card" key={index}>
            <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />
            <h4 className="original_title">{item.original_title}</h4>
            <span>{release_date2}</span>
            <div>
              <div>
                
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Movies;
