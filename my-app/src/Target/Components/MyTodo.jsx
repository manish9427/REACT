import { useState } from "react";
const MyTodo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>My Todo</h1>
      <input type="text" />
      <button>Add</button>
    </div>
  );
};
export default MyTodo;
