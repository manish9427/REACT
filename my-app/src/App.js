import "./App.css";
import Rules from "./Youtube/RulesJsx";
import Header from "./Youtube/Header";
import PropsExample from "./Youtube/PropsExample";
import StateLearning from "./Youtube/StateLearning";
import UseStateHook from "./Youtube/UseStateHook";
import HookUseEffect from "./Youtube/HookUseEffect";
import HookUseRef from "./Youtube/HookUseRef";
import PropsDrilling from "./Youtube/props drilling/PropsDrilling";

function App() {
  return (
    <div className="App">
      <Rules />
      <Header></Header>
      <PropsExample fullname="manish verma" />
      <StateLearning />
      <UseStateHook />
      <HookUseEffect />
      <HookUseRef />
      <PropsDrilling />
    </div>
  );
}

export default App;
