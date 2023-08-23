// 1 - we take the api from fake store and display that data into the console

import { useState, useEffect } from "react";
import axios from "axios";
function ApiFetch() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setState((state) => state + 1);
    }, 1000);
  });
  return (
    <>
      <h1>{state}</h1>
    </>
  );
}
export default ApiFetch;
