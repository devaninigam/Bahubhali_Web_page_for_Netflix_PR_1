import React from 'react'
import './App.css'
import Logonetflix from './img/Logonetflix.png'

function Header() {
    return (
        <React.Fragment>
            <div className='header'>
                <div className='row_h'>
                    <div className='netflix_logo'>
                        <img className='netflix_img' src={Logonetflix} />
                    </div>
                    <div className='header_detail'>
                        <p>UNLIMITED TV SHOWS & MOVIES</p>
                        <button className='btn_join'>JOIN NOW</button>
                        <button className='btn_signIN'>SING IN</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header