import { useState } from "react";
import TodoItem from "./TodoItem";

function AddTodo(props) {
  const [state, setState] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItems = () => {
    var newItem = {
      title: state,
      status: true,
    };
    setTodoItems([...todoItems, newItem]);
  };

  const handleToggle = (index) => {
    var newArray = todoItems.map((item, i) => {
      return index === i ? { ...item, status: !item.status } : item;
    });
    setTodoItems(newArray);
  };

  const deleteItem = (index) => {
    var filterData = todoItems.filter((item, i) => {
      return index !== i;
    });
    setTodoItems(filterData);
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Todo List</h1>
      <input
        value={state}
        type="text"
        placeholder="What needs to be done?"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button onClick={addTodoItems}>Add Item</button>
      <TodoItem
        todoitem={todoItems}
        deleteItem={deleteItem}
        handleToggle={handleToggle}
      />
    </div>
  );
}
export default AddTodo;
