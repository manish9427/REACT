import "./App.css";
import Counter from "./Implemetation/Counter";
import Rules from "./Youtube/RulesJsx";
import ApiFetch from "./Implemetation/Apifetch";

function App() {
  return (
    <div className="App">
      <Counter />
      <Rules />
      <ApiFetch />
    </div>
  );
}

export default App;
