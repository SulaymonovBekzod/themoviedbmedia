import React, { useEffect, useState } from 'react'
import "./Person.css"
import person from '../../repository/person';

function Person() {

  const [personMovies, setpersonMovies] = useState([])
  
  async function getpersonMovies() {
    const resp = await person.getMoviesByName("popular?language=en-US&page=1");
    setpersonMovies(resp.results);
  }

  useEffect(() => {
    getpersonMovies();
  }, []);

  return (
    <div className='personContainer'>
      {
        personMovies?.map((item, index) => {
          return (
            <div key={index} className="cards">
              <img className='person_people' src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${item.profile_path}`} alt="" />
              <p className='original_name'>{item.original_name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Person
