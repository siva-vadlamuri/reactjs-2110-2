import React, { useReducer } from "react";

function Counter() {
  // useReducer hook is used for handle the complex state
  const reducer = (currentState, action) => {
    // console.log(currentState);
    //   reducer function is used to update the based on action
    switch (action) {
      case "INCREMENT":
        return currentState + 1;
      case "DECREMENT":
        return currentState - 1;
      default:
        return currentState;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>Count - {count}</h2>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
