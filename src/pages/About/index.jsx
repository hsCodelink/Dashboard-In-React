import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

// useRef:
const About = () => {
  const [myData, setMyData] = useState("");
  const count = useRef(0);
  const inputRef = useRef("");

  const handleClick = () => {
    count.current = count.current + 1;
    console.log("You clicked" + count.current + "times");
  };

  const changeStyle = () => {
    inputRef.current.style.backgrounColor = "red";
    console.log("inputRef: ", inputRef);
  };

  useEffect(() => {
    handleClick();
  });
  return (
    <div className="container">
      <h2>useRef :</h2>
      <h3>{count.current}</h3>
      <h4>You clicked {count.current} times</h4>
      <input
        type="text"
        value={myData}
        onChange={(e) => {
          setMyData(e.target.value);
        }}
        ref={inputRef}
      />
      <button onClick={handleClick}>Click me</button>
      <button onClick={changeStyle}>Show Style</button>
    </div>
  );
};

export default About;
