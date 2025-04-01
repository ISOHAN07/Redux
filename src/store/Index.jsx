import { legacy_createStore } from "redux";

// function that takes the previous state and provides a new state obj
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// the store requires an argument that points to the reducer function
const store = legacy_createStore(counterReducer);

export default store;
