import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <div className='container2'>
            <div className='row'>
                <div>
                    <div>
                        <img className='footer_movie_img' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
                    </div>
                    <div>
                        <button className='footer_movie_btn'>Hi Sulaymonov_818!</button>
                    </div>
                </div>
                <div className='footer_text'>
                    <div className='col-4'>
                        <h3>THE BASICS</h3>
                        <p>About TMDB</p>
                        <p>Contact Us</p>
                        <p>Support Forums</p>
                        <p>API</p>
                        <p>System Status</p>
                    </div>
                    <div className='col-4'>
                        <h3>GET INVOLVED</h3>
                        <p>Contribution Bible</p>
                        <p>Add New Movie</p>
                        <p>Add New TV Show</p>
                    </div>
                    <div className='col-4'>
                        <h3>COMMUNITY</h3>
                        <p>Guidelines</p>
                        <p>Discussions</p>
                        <p>Leaderboard</p>
                    </div>
                    <div className='col-4'>
                        <h3>LEGAL</h3>
                        <p>Terms of Use</p>
                        <p>API Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>DMCA Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
