import React from "react";
import style from "./Card.module.css";

const Card = ({ img, name }) => {
  return (
    <div className={style.mainCard}>
      <div className={style.imgWrapper}>
        <img src={img}></img>
      </div>
      <div className={style.nameWrapper}>
        <a>{name}</a>
      </div>
    </div>
  );
};

export default Card;
