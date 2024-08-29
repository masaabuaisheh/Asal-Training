import React from "react";
import { useStore } from "./context/store";
import { incrementCount, decrementCount } from "./context/actions";

const Home = () => {
  // Access the State and Dispatch in a Component
  const { state, dispatch } = useStore();

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(decrementCount())}>Decrement</button>
    </div>
  );
};

export default Home;
