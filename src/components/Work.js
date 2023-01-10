import "./WorkCardStyles.css";

import React from 'react'
import img1 from "../img/img-1.jpg";
import { NavLink } from "react-router-dom";

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <section class="products">
      <h1>Products</h1>
        <div class="container">
            <div class="products-grid">
              
{WorkCardData.map((val, ind) => {
  return(
      <WorkCard
      key={ind}
      imgsrc={val.imgsrc}
      title={val.title}
      price={val.price}
      suport={val.suport} />
  )
})}
            </div>
        </div>
    </section>
  )
}

export default Work;
