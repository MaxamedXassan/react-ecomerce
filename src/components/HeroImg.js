import "./HeroImgStyles.css";

import React from 'react'
import introImg from "../img/introImg.jpg";
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" 
            src={introImg} />
        </div>
        <div className="content">
            <p>Frist Shopping Win.</p>
            <h1>What is New.</h1>
            <div>
                <Link to="/product" className="btn">Product</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg