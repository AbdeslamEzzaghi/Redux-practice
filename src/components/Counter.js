import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incerementHandler = (val) => {
    console.log(val);
    dispatch({ type: "increment", value: val });
  };
  const decerementHandler = (val) => {
    dispatch({ type: "decrement", value: val });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={decerementHandler}>Decrement</button>
        <button onClick={incerementHandler.bind(null, 5)}>
          IncerementByFive
        </button>
        <button onClick={incerementHandler.bind(null, 1)}>Incerement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
