import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../src/store/store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="headings">
        <h1>Counter App</h1>
        <h2>
          Count Result: <span>{counter}</span>
        </h2>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            dispatch(decrement({ counter: counter - 1 }));
          }}
        >
          subtract
        </button>
        <button
          onClick={() => {
            dispatch(increment({ counter: counter + 1 }));
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
