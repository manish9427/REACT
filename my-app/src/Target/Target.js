import "./Target.css";

import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import TodoApp from "./Components/TodoApp";

function Target() {
  return (
    <div className="Target">
      <Counter />
      <Timer />
      <TodoApp />
    </div>
  );
}

export default Target;
