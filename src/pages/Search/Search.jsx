import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { dataconvert } from "../../repository/dataconvert"
import "./Search.css";
import { LangContext } from "../../components/Context/Context";
function SearchPage() {
    const [queryParameters] = useSearchParams();
    const searchQuery = queryParameters.get("query");
    const { language } = useContext(LangContext)

    const [searchData, setSearch] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQxMWVlNzkzNzNhYmU3OWRiNGRiYTNmZjkzYTJkZCIsInN1YiI6IjY2NTAxOTI1YmMyMjhiZWI5MjA2ODU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9Ycvg4HIOfMbqZ6SzAv7fkC-pPDfRSRw9wpvZqB24",
            },
        };

        if (searchQuery) {
            axios
                .get(
                    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=${language}-US&page=1`,
                    options
                )
                .then((response) => setSearch(response.data.results))
                .catch((err) => console.error(err));
        }
    }, [language] [searchQuery]);

    return (
        <div className="searchResults">
            {searchData.map((movie) => {
                return (
                    <div
                        onClick={() => {
                            return movie;
                            
                        }}
                        className="searchCard"
                        key={movie.id}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="searchTexts">
                            <h2>{movie.title}</h2>
                            <p color="
                            ">{dataconvert(movie.release_date)}</p>
                            <h4>{movie.overview}</h4>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchPage;
