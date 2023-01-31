import React from "react";
import style from "./Progressline.module.css";
import ProgressBar from "react-animated-progress-bar";
const myRef = document.querySelector('.scrollable-div')

const Progressline = ({ icon ,percentage,title}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.icon}>{icon}</div>
      <div className={style.progressBarline}>
        <ProgressBar
          width="400px"
          height="10px"
          rect
          fontColor="gray"
          backgroundColor="red"
          percentage={percentage}
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="#333333"
          trackBorderColor="grey"
          defColor={{
            fair: 'orangered',
            good: 'yellow',
            excellent: 'green',
            poor: 'red',
          }}
          scrollArea={myRef}
        />
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default Progressline;
