import "./WorkCardStyles.css";

import React from 'react'
import img1 from "../img/img-1.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div class="product">
                    <div class="product-img-box">
                        <a href="#">
                            <img src={props.imgsrc} alt="image" class="product-img"/>
                        </a>
                    </div>
                    <div class="product-title">
                        <a href="#">{props.title} </a>
                    </div>
                    <div class="two">
                    <div class="product-price">{props.price} </div>
                    <NavLink to={props.suport} className="btn">Buy Now</NavLink>
                </div>
                </div>
  )
}

export default WorkCard;