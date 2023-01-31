import React, { useEffect, useState } from "react";
import style from "./Box.module.css";
import { FaStar } from "react-icons/fa";
import ProgressBar from "react-animated-progress-bar";

const Box = ({ percentage, title, Date, time }) => {
  const [star, setStar] = useState(0);
  const [starHover, setStarHover] = useState(0);

  return (
    <div className={style.mainBoxSection}>
      <div className={style.ratingBox}>
        <div className={style.mainProgressSection}>
          <ProgressBar
            width="120px"
            trackWidth="15"
            percentage={percentage}
            className={style.progressBar}
          />
        </div>
        <div className={style.ratingContent}>
          <h2>{title}</h2>
          <p>{Date}</p>
        </div>
        <div className={style.ratingStar}>
          {[...Array(5)].map((item, index) => {
            index += 1;
            return (
              <FaStar
                key={index}
                className={
                  index <= (starHover || star)
                    ? style.selected
                    : style.Unselected
                }
                onClick={() => setStar(index)}
                onMouseEnter={() => setStarHover(index)}
                onMouseLeave={() => setStarHover(star)}
              />
            );
          })}
        </div>
        <div className={style.timeSection}>
          <h3>{time}</h3>
        </div>
      </div>
    </div>
  );
};

export default Box;
