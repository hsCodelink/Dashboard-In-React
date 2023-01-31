import React from "react";
import style from "./Card.module.css";
import { TiGroup } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";

const Card = ({ title, amount, time }) => {
  return (
    <div className={style.subCard}>
      <div className={style.cardContent}>
        <div className={style.topContent}>
          <div className={style.leftContent}>
            <h3>{title}</h3>
            <h4>{amount}</h4>
          </div>
          <div className={style.rightContent}>
            <TiGroup className={style.groupIcon} />
            <FaShoppingBag className={style.shoppingIcon}/>
            <TbCalendarTime className={style.calendarIcon}/>
          </div>
        </div>
        <div className={style.bottomContent}>
          <h6>{time}</h6>
          <span>
            <a><BsArrowRightShort className={style.rightArrow}/></a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
