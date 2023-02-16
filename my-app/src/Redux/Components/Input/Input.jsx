import styles from "./input.module.css";
import { useState } from "react";
import { myAction } from "../../myAction/myAction";
function Input(props) {
  const [state, setState] = useState("");
  const sendDataToAction = () => {
    myAction(state);
  };
  return (
    <div className={styles.main}>
      <h1>Input Component</h1>
      <input
        type="text"
        placeholder="Enter the data"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={sendDataToAction}>send data to redux</button>
    </div>
  );
}
export default Input;
