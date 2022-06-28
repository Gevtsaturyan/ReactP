import React from "react";
import Comments from "../../Components/Comments/Comments";
import Likes from "../../Components/Likes/Likes";
import Title from "../../Components/Title/Title";
import './About.css'
import about from './about.jpg'

const About =()=>{
    return (
        <div className="about">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src={about} alt='about'  />
                        <Title/>
                        <Likes/>
                    </div>
                    <Comments/>
                </div>
            </div>
        </div>
    )
}
export default About