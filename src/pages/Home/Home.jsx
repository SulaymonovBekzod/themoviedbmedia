import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import trending from '../../repository/trending'
import { LangContext } from '../../components/Context/Context'

export default function Home() {
  const [trendingData, setTrendingData] = useState([])
  const { language } = useContext(LangContext)
  const searchRef = useRef()
  const navigation = useNavigate()
  console.log(language);

  async function TrendingMovie() {
    const res = await trending.getMoviesByName(`all/day?language=${language}-US`)
    setTrendingData(res.results)

  }

  useEffect(() => {
    TrendingMovie()
  }, [language])

  function searchAll() {
    console.log(searchRef.current.value);
    navigation({
      pathname: '/search',
      search: `value=${searchRef.current.value}`
    })
  }



  return (
    <div className="container_home">
      <div className="row_home">
        <div className='background'>
          {language === "ru" ? <h1 className='home_title'>Welcome.</h1> : <h1 className='home_title'>Добро пожаловать.</h1>}
          {language === "ru" ? <h5 className='home_text'>Millions of movies, TV shows and people to discover. Explore now.</h5> : <h5 className='home_text'>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h5>}
          {language === "ru" ? <input ref={searchRef} className='home_input' type="text" placeholder='Search for a movie, tv show, person......' /> : <input ref={searchRef} className='home_input' type="text" placeholder='Найти фильм, сериал, персону......' />}
          <button onClick={() => searchAll()} className='search_btn'>serach</button>
        </div>
        <div className='background-image'>
        </div>
        <div className='trending_section'>
          {
            trendingData.map((item, index) => {
              return (
                <div className='trending_card' key={index}>
                  <img className='trending_img' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}`} alt="" />
                  <p className='trending_title1'>{item.name || item.title}</p>
                  <p className='data'>{item.first_air_date || item.release_date}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
