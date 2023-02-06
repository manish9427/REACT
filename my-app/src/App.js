import "./App.css";
import Counter from "./Components/Counter/Counter";
import AddTodo from "./Components/Todo/AddTodo";
import TotalAmount from "./Components/Amount/Amount";
import Post from "./Components/Post/Post";
import Parent from "./Components/Parent-Child/Parent";
import ShowProfile from "./Components/LifeCycle/ShowProfile";
import Profile2 from "./Components/LifeCycle/Profile2";
import ShowCounter from "./Components/CounterApp/ShowCounter";
import Timer from "./Components/Timer/Timer";
import DOM from "./Components/Timer/DOM";

function App() {
  return (
    <div className="App">
      <Counter />
      <AddTodo />
      <TotalAmount />
      <Post />
      <Parent />
      <ShowProfile />
      <Profile2 />
      <ShowCounter />
      <Timer />
      <DOM />
    </div>
  );
}

export default App;
