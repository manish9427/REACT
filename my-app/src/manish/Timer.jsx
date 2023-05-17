import "./AppManish";
import { useState } from "react";

export default function Timer() {
  const [state, setState] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function start() {
    if (!intervalId) {
      const id = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  }

  function stop() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  function reset() {
    clearInterval(setState(0));
    stop();
  }

  return (
    <div className="App">
      <h1>Timer</h1>
      <h3>{state}</h3>
      <button onClick={start}>Start </button>&nbsp;
      <button onClick={stop}>Stop </button>&nbsp;
      <button onClick={reset}>Reset </button>
    </div>
  );
}

// import "./styles.css";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [state, setState] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     return () => clearInterval(intervalId);
//   }, [intervalId]);

//   function start() {
//     if (!intervalId) {
//       const id = setInterval(() => {
//         setState((prev) => prev + 1);
//       }, 1000);
//       setIntervalId(id);
//     }
//   }

//   function stop() {
//     clearInterval(intervalId);
//     setIntervalId(null);
//   }

//   return (
//     <div className="App">
//       <h1>Timer</h1>
//       <h3>{state}</h3>
//       <button onClick={start}>Start </button>
//       <button onClick={stop}>Stop </button>
//     </div>
//   );
// }

// import "./styles.css";
// import { useEffect, useState, useRef } from "react";
// export default function App() {
//   const [Timer, SetTimer] = useState(0);
//   const id = useRef();
//   useEffect(() => {}, [Timer]);
//   function Start() {
//     id.current = setInterval(() => {
//       SetTimer((pre) => pre + 1);
//     }, 1000);
//   }
//   function Stop() {
//     clearInterval(id.current);
//   }

//   return (
//     <div className="App">
//       <h1>Timer</h1>
//       <h3>{Timer}</h3>
//       <div className="btms">
//         <button onClick={() => Start()}>Start </button>
//         <button onClick={() => Stop()}>Stop </button>
//       </div>
//     </div>
//   );
// }
