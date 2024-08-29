import { INCREMENT, DECREMENT } from "../context/actionTypes";

export const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};
