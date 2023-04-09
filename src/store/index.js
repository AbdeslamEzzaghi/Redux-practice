import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };
// reducer function
const counterReducer = (state = intialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  }
  return {
    counter: state.counter
  };
};
const store = createStore(counterReducer);
export default store;
/*const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });*/
