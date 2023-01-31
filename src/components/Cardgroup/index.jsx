import React from "react";
import { cardsDetails } from "../../shared";
import Card from "./Card";
import style from "./Cardgroup.module.css";

const Cardgroup = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainCard}>
          {cardsDetails.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardgroup;
