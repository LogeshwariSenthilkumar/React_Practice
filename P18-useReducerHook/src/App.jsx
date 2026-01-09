import { act, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let ACTIONTYPE = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
  };
  let reducer = (state, action) => {
    switch (action.type) {
      case ACTIONTYPE.INCREMENT:
        return { ...state, count: state.count + 1 };
      case ACTIONTYPE.DECREMENT:
        return { ...state, count: state.count - 1 };
      case ACTIONTYPE.RESET:
        return { ...state, count: 0 };

      default:
        return state;
    }
  };
  let [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Use Reducer Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <p>{count}</p>
      </div>
      <div className="card">
        <button onClick={() => dispatch({type:ACTIONTYPE.INCREMENT})}>
          Increment
        </button>
        <button onClick={() => dispatch({type:ACTIONTYPE.DECREMENT})}>
          Decrement
        </button>
        <p>{state.count}</p>
        <button onClick={() => dispatch({type:ACTIONTYPE.RESET})}>Reset</button>
      </div>
    </>
  );
}

export default App;
