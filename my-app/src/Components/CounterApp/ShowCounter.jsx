import { useState } from "react";
import CounterApp from "./CounterApp";
export default function ShowCounter() {
  const [state, setState] = useState(true);
  return (
    <div>
      {state ? <CounterApp /> : <div></div>}
      <div style={{ margin: "10px auto" }}>
        <button
          onClick={() => {
            setState(true);
          }}
        >
          Show Counter
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            setState(false);
          }}
        >
          Hide Counter
        </button>
      </div>
    </div>
  );
}
