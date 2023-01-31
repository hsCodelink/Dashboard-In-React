import React from "react";
import { progressCategory, ratingDetails } from "../../shared";
import Box from "./Box";
import Progressline from "./Progressline";
import style from "./Rating.module.css";

const Rating = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainRatingSection}>
          <div className={style.leftSection}>
            <div className={style.topWrapper}>
              <div className={style.heading}>Observations</div>
              <div className={style.viewbtn}>
                <button>View All</button>
              </div>
            </div>
            <div className={style.ratingSection}>
              {ratingDetails.map((item, index) => (
                <Box {...item} key={index} />
              ))}
            </div>
          </div>
          <div className={style.rightSection}>
            <div className={style.progressCategory}>
              {progressCategory.map((item, index) => (
                <Progressline {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
