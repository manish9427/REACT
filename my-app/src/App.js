import "./App.css";
import Counter from "./Implemetation/Counter";
import Rules from "./Youtube/RulesJsx";
import ApiFetch from "./Implemetation/Apifetch";
import Header from "./Youtube/Header";
import PropsExample from "./Youtube/PropsExample";

function App() {
  return (
    <div className="App">
      <Counter />
      <ApiFetch />
      <Rules />
      <Header></Header>
      <PropsExample fullname="manish verma" />
    </div>
  );
}

export default App;
