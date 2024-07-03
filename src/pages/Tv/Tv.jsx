import React, { useContext, useEffect, useState } from 'react'
import "./Tv.css"
import tvShows from '../../repository/tvShows'
import filterchevron from "../../../src/images/chevronRight.jpg"
import { LangContext } from '../../components/Context/Context'

import { useNavigate } from 'react-router-dom'
function Tv() {
  const { language } = useContext(LangContext)
  const [tvshowsres, setTvshowsres] = useState([])

  const navigate = useNavigate()

    async function getTvShows() {
      let res = await tvShows.getMoviesByName(`popular?language=${language}-US&page=1`)
      setTvshowsres(res.results)
      console.log(res.results);
    }

  useEffect(() => {
    getTvShows()
  }, [language])

  function TvNewsShow(id) {
    navigate((`/tv/${id}`))
  }

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
      <div  className='wrapper2'>
        {
          tvshowsres?.map((item, index) => {
            return (
              <div onClick={() => TvNewsShow(item.id)} className='card_tv' key={index}>
                <img className='card_tv_img' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />
                <p className='tv_title10'>{item.name}</p>
                <p classNa2='tv_title10'>{item.first_air_date}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tv
