import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className="container_home">
      <div className="row_home">
        <div className='background'>
          <h1 className='home_title'>Welcome.</h1>
          <h5 className='home_text'>Millions of movies, TV shows and people to discover. Explore now.</h5>
          <input className='home_input' type="text" placeholder='Search for a movie, tv show, person......'/>
        </div>
        <div className='background-image'>
        </div>
      </div>
    </div>
  )
}
