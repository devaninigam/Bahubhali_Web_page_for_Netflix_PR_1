import React from "react";
import './App.css'
import Post_1 from './img/Bahubali_Post_1.jpg'
import Post_2 from './img/Bahubali_Post_2.jpg'
import Post_3 from './img/Bahubali_Post_3.jpg'
import Post_4 from './img/Bahubali_Post_4.jpg'
import Post_5 from './img/Bahubali_Post_5.jpg'
import Post_6 from './img/Bahubali_Post_6.jpg'
import Post_7 from './img/Bahubali_Post_7.jpg'
import Post_8 from './img/Bahubali_Post_8.jpg'
import Post_9 from './img/Bahubali_Post_9.jpg'
import Post_10 from './img/Bahubali_Post_10.jpg'
import Post_11 from './img/Bahubali_Post_11.jpg'
import Post_12 from './img/Bahubali_Post_12.jpg'

class Post extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Section">
                    <div className="container">
                        <h2 className="head_text">More Like This</h2>
                        <div className="row">
                            <div className="col_4 col">
                                <img className="mar" src={Post_1}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_2}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_3}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_4}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col_4 col">
                                <img className="mar" src={Post_5}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_6}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_7}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_8}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col_4 col">
                                <img className="mar" src={Post_9}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_10}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_11}/>
                            </div>
                            <div className="col_4 col">
                                <img className="mar" src={Post_12}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Post;