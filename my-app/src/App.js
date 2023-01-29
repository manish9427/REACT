import "./App.css";
import Counter from "./Components/Counter/Counter";
import AddTodo from "./Components/Todo/AddTodo";
import TotalAmount from "./Components/Amount/Amount";
import Post from "./Components/Post/Post";
import Parent from "./Components/Parent-Child/Parent";
import ShowProfile from "./Components/LifeCycle/ShowProfile";
import Profile2 from "./Components/LifeCycle/Profile2";

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
    </div>
  );
}

export default App;
