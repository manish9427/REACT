import "./Target.css";

import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import TodoApp from "./Components/TodoApp";
import MyTodo from "./Components/MyTodo";

function Target() {
  return (
    <div className="Target">
      <Counter />
      <Timer />
      <TodoApp />
      <MyTodo />
    </div>
  );
}

export default Target;
