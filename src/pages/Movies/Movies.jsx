import axios from "axios";
import React, { useEffect, useState } from "react";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQxMWVlNzkzNzNhYmU3OWRiNGRiYTNmZjkzYTJkZCIsInN1YiI6IjY2NTAxOTI1YmMyMjhiZWI5MjA2ODU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9Ycvg4HIOfMbqZ6SzAv7fkC-pPDfRSRw9wpvZqB24",
        },
      })
      .then((resp) => {
        console.log(resp);
        setPopularMovies(resp?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      Movies page kino
      {popularMovies.map((item, index) => {
        return <h1 key={index}>{item?.title}</h1>;
      })}
    </div>
  );
}

export default Movies;
