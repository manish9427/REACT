import { useState } from "react";
const MyTodo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>My Todo</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>{todo.map((todo, index) => {})}</ul>
    </div>
  );
};
export default MyTodo;
