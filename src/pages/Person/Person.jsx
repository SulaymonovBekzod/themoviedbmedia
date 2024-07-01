import React, { useContext, useEffect, useState } from 'react'
import "./Person.css"
import person from '../../repository/personmovie';
import { LangContext } from '../../components/Context/Context';
import { useNavigate } from 'react-router-dom';

function Person() {
  const { language } = useContext(LangContext)
  const [personMovies, setpersonMovies] = useState([])
  const navigate = useNavigate()

  async function getpersonMovies() {
    const resp = await person.getMoviesByName(`popular?language=${language}-US&page=1`, "people");
    setpersonMovies(resp.results);
    console.log(resp.results);
  }

  useEffect(() => {
    getpersonMovies();
  }, [language]);


  function handleClick(id) {
    navigate(`/people/${id}`)
    console.log(id);
  }

  return (
    <div className='personContainer'>
      {
        personMovies?.map((item, index) => {
          return (
            <div onClick={() => handleClick(item.id)} key={index} className="cards">
              <img className='person_people' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.profile_path}`} alt="" />
              <p className='original_name'>{item.name}</p>
              <p className='original_name'>{item.original_title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Person
