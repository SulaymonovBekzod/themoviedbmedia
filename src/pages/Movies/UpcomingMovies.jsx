import React, { useEffect, useState } from "react";
import movies from "../../repository/movies";

function UpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  async function getUpcomingMovies() {
    const resp = await movies.getMoviesByName("upcoming");
    setUpcomingMovies(resp.results);
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return (
    <div>
      Upcoming Movies
      {upcomingMovies?.map((item, index) => {
        return <h1 key={index}>{item?.title}</h1>;
      })}
    </div>
  );
}

export default UpcomingMovies;
