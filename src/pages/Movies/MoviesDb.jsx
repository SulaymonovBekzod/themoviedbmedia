import React, { useEffect, useState } from 'react'
import "./MoviesDb.css"
import { useParams } from 'react-router-dom'
import selectedMovie from '../../repository/selectedMovie'
export default function MovivesDb() {
  const [movie, setMovie] = useState()
  const params = useParams()
  const getMovieById = async () => {
    try {
      const response = await selectedMovie.getMovieById(`${params.id}?language=en-US`, 'movie')
      setMovie(response);
      console.log(response);
    } catch (error) {

    }
  }
  useEffect(() => {
    getMovieById()
  }, [])

  return (
    <div  style={{ background: `url(https://media.themoviedb.org/t/p/w440_and_h660_face/${movie?.backdrop_path})` }} className='container_movies'>
      <div className="containerMovieWrapper">
        <div className='row_movies'>
          <div className='moviesdb_id'>
            <div>
              <img className='movies_inside' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${movie?.poster_path}`} alt="" />
            </div>
            <div className='movies2'>
              <h2>{movie?.title} </h2>
              <p className='information'>06/14/2024 (US) {movie?.tagline} 1h 37m</p>
              <div className='movies_section'>
                <h6 className='number'> 79%  User Score</h6>
                <img className='movies_smile' src="https://www.themoviedb.org/assets/2/v8/1f60d-f12478ffe50d98da9d6cafbf29ef1777b8d1d2bb123224c978ca9ba4e6e6159b.svg" alt="" />
                <img className='movies_smile' src="https://www.themoviedb.org/assets/2/v8/1f600-f53b445a86235a4ef54899ad2f1a936e3ff6d1dcdaafc9ed63d6a6070491c0a1.svg" alt="" />
                <img className='movies_smile' src="https://www.themoviedb.org/assets/2/v8/1f972-53b1d0723b2bec00ada6fba7a1772b267f5a05d955b0999f66771865e59fd97b.svg" alt="" />
                <button className='movies_btn'>What`s your Vibe?</button>
              </div>
              <div className='movies_descp'>
                <h4>{movie?.tagline}</h4>
                <h4>Overview</h4>
                <p className='movies_text'>{movie?.overview}</p>
              </div>
              <div className='movies_director'>
                <div>
                  <h4>Kelsey Mann</h4>
                  <p className='story'>Director, Story</p>
                </div>
                <div>
                  <h4>Meg LeFavue</h4>
                  <p className='story'>Screenplay,Story</p>
                </div>
                <div>
                  <h4>Dave Holstein</h4>
                  <p className='story'>Screenplay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
