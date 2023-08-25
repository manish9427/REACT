import "./App.css";
import Counter from "./Implemetation/Counter";
import Rules from "./Youtube/RulesJsx";
import ApiFetch from "./Implemetation/Apifetch";
import Header from "./Youtube/Header";
import PropsExample from "./Youtube/PropsExample";
import StateLearning from "./Youtube/StateLearning";
import UseStateHook from "./Youtube/UseStateHook";

function App() {
  return (
    <div className="App">
      <Counter />
      <ApiFetch />
      <Rules />
      <Header></Header>
      <PropsExample fullname="manish verma" />
      <StateLearning />
      <UseStateHook />
    </div>
  );
}

export default App;
