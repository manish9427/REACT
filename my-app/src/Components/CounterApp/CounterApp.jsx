import { useState, useEffect } from "react";
export default function CounterApp() {
  const [state, setState] = useState(0);
  // const [name, setName] = useState("Manish");
  const [name, setName] = useState("");
  useEffect(() => {
    // console.log("Called fun is Called");
    localStorage.setItem("myname", "Manish Verma");
    // document.title = "Manish Verma";
    document.title = name + " Count Value is: " + state;

    return () => {
      // localStorage.removeItem("myname");
      //   alert("Component will Unmount");
    };
  }, [name, state]);

  return (
    <div>
      <h1>Counter App:{state}</h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        count
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setName("Manish");
        }}
      >
        Manish
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setName("Neeraj");
        }}
      >
        Neeraj
      </button>
    </div>
  );
}
