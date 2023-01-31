import React from "react";
import style from "./Card.module.css";

const Card = ({ image_1, image_2, image_3, image_4, image_5, image_6 }) => {
  return (
    <div className={style.maincardSection}>
      <div className={style.imageWrapper}>
        <img src={image_1}></img>
        <img src={image_2}></img>
        <img src={image_3}></img>
        <img src={image_4}></img>
        <img src={image_5}></img>
        <img src={image_6}></img>
      </div>
    </div>
  );
};

export default Card;
