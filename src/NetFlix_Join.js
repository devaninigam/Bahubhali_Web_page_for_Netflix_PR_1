import React from "react";
import './App.css'
import Short_logo from './img/samoll_netflix_logo.png'

let Join = () => {
    return (
        <React.Fragment>
            <div className="Section">
                <div className="Join row">
                    <div className="row">
                        <img className="S_logo" src={Short_logo} />
                        <h4 className="bahubali_normal_text" style={{ fontWeight: '700' }}>Watch all you want.</h4>
                    </div>
                    <button className='btn_join'>JOIN NOW</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Join;