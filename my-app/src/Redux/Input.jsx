import styles from "./index.module.css";
function Input() {
  return (
    <div className={styles.main}>
      <h1>Input Component</h1>
      <input type="text" />
      <button>send data to redux</button>
    </div>
  );
}
export default Input;
