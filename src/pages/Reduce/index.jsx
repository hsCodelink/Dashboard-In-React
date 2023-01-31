import React, { useEffect, useState } from "react";

const Reduce = () => {
  const [arr, setArr] = useState([10, 20, 30, 40]);

  const btnHandler = () => {
    const sum = arr.reduce((prev, current) => {
      return prev + current;
    },0);
    console.log("sum :", sum);

    //sub
    // const sub = arr.reduce((prev, current) => {
    //   return prev - current;
    // },0);
    // console.log("sub :", sub);


    //multiply
    // const multiply = arr.reduce((prev, current) => {
    //   return prev * current;
    // },0);
    // console.log("multiply :", multiply);


    // divide
    // const divide = arr.reduce((prev, current) => {
    //   return prev / current;
    // },0);
    // console.log("divide :", divide);

  };
  return (
    <div className="container">
      <h2>Reduce :</h2>
      <div>
        {arr}
        <button
          onClick={() => {
            btnHandler();
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Reduce;
