import React from "react";
import './App.css'
import Bahubali_text from './img/Bahubali_text.png'
import Bahubali_Img_Banner from './img/Bahubali_img_banner.jpg'

function Banner() {
    return (
        <React.Fragment >
            <div className="Banner">
                <div className="container">
                    <div className="row">
                        <div className="Banner_detail">
                            <img className="Bahubali_text" src={Bahubali_text} />
                            <h1>Baahubali: The Beginning (Hindi Version)</h1>
                            <h4 className="Bahubali_titel_info"> 2015 | <span>  U/A 13+</span> | 2h 38m | Action </h4>
                            <p className="bahubali_normal_text">Villagers in the kingdom of Mahismati rescue a baby who is destined to embark on a heroic quest in this Hindi version of S.S. Rajamouli's epic.</p>
                            <div className="row">
                                <span className="Bahubali_titel_info" style={{ paddingRight: '5px', fontSize: '16px' }} >Starring:</span>
                                <span className="bahubali_normal_text">Prabhas,Rana Daggubati,Anushka Shetty</span>
                            </div>
                        </div>
                        <div className="only_img"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;