import React from "react";
import { Images } from "../../shared";
import Card from "./Card";
import style from "./Grid.module.css";

const Grid = () => {
  return (
    <>
      <div className="container">
        <h2> Grid :</h2>
        <div className={style.mainGridSection}>
            {
                Images.map((item,index)=>{
                    return <Card {...item}/>
                })
            }
        </div>
      </div>
    </>
  );
};

export default Grid;
