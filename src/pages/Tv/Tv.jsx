import React, { useEffect, useState } from 'react'
import "./Tv.css"
import tvShow from '../../repository/tvShows'
import filterchevron from "../../../src/images/chevronRight.jpg"

function Tv() {
  const [tvshowsres, setTvshowsres] = useState([])

  async function getTvShows() {
    let res = await tvShow.getMoviesByName("popular?language=en-US&page=1")
    setTvshowsres(res.results)
    console.log(res.results);
  }

  useEffect(() => {
    getTvShows()
  }, [])

  return (
    <div className='tvshow'>
      <div className="sidebar_movie2">
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
          <button className="filterSearch2">Search</button>
        </div>
      </div>
      <div className='wrapper2'>
      {
        tvshowsres.map((item, index) => {
          return (
            <div className='card_tv' key={index}>
              <img className='card_tv_img' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />
              <p className='tv_title'>{item.original_title}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Tv
