import "./App.css";
import Counter from "./Components/Counter/Counter";
import AddTodo from "./Components/Todo/AddTodo";
import TotalAmount from "./Components/Amount/Amount";
import Post from "./Components/Post/Post";
import Parent from "./Components/Parent-Child/Parent";

function App() {
  return (
    <div className="App">
      <Counter />
      <AddTodo />
      <TotalAmount />
      <Post />
      <Parent />
    </div>
  );
}

export default App;
