import React, { useReducer } from "react";

const initialState = { name: "Harsh", age: 21 };


// usereducer :
const Home = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          name: state.name,
          age: state.age + action.payload,
        };
      case "decrement":
        return {
          name: state.name,
          age: state.age - action.payload,
        };
      case "Change input value":
        return {
          name: action.payload,
          age: state.age,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <h2>useReducer :</h2>
      <h3>
        {state.name} {state.age}
      </h3>
      <input
        type="text"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "Change input value", payload: e.target.value });
        }}
      ></input>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment Age +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement Age -
      </button>
    </div>
  );
};

export default Home;
