import React, { useEffect, useState } from "react";
import movies from "../../repository/movies";
import "./movies.css";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);

  async function getPopularMovies() {
    const resp = await movies.getMoviesByName("popular");
    setPopularMovies(resp.results);
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div>
      Movies page kino
      <div className="wrapper">
        {popularMovies?.map((item, index) => {

          let release_date = item.release_date
          let release_date2 = new Date(release_date).toLocaleDateString();


          return <div className="card" key={index}>
            <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />
            <p>{item?.title}</p>
            <span>{release_date2}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Movies;
