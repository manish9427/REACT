import { useState } from "react";
import CounterApp from "./CounterApp";
export default function ShowCounter() {
  const [state, setState] = useState(true);
  return (
    <div>
      {state ? <CounterApp /> : <div></div>}
      <button
        onClick={() => {
          setState(true);
        }}
      >
        Show Counter
      </button>
      <button
        onClick={() => {
          setState(false);
        }}
      >
        Hide Counter
      </button>
    </div>
  );
}
