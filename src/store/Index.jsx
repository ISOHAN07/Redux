import { legacy_createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// function that takes the previous state and provides a new state obj
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
      // state mutating is allowed cuz bts it copies the obj
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


// const counterReducer = (state = initialState, action) => {
//   // state mutating is not allowed always generate a new state obj snapshot
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//       // need to add all the states that we are handling cuz redux won't merge the changes with the obj instead replace the obj
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// the store requires an argument that points to the reducer function
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
//  this actions create a unique identifier object for each of the reducer functions

export default store;
