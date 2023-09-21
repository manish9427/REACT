import "./App.css";
import Rules from "./Youtube/RulesJsx";
import Header from "./Youtube/Header";
import PropsExample from "./Youtube/PropsExample";
import StateLearning from "./Youtube/StateLearning";
import UseStateHook from "./Youtube/UseStateHook";
import HookUseEffect from "./Youtube/HookUseEffect";
import HookUseRef from "./Youtube/HookUseRef";
import PropsDrilling from "./Youtube/props drilling/PropsDrilling";
import ParentClass from "./Youtube/context api/ParentClass";
import ClassA from "./Youtube/useContext/ClassA";
import { Provider } from "react-redux";
import store from "./Youtube/redux/reduxContainer/Store";
import BookContainer from "./Youtube/redux/reduxContainer/BookContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Rules />
        <Header></Header>
        <PropsExample fullname="manish verma" />
        <StateLearning />
        <UseStateHook />
        <HookUseEffect />
        <HookUseRef />
        <PropsDrilling />
        <ParentClass />
        <ClassA />
        <BookContainer />
      </div>
    </Provider>
  );
}

export default App;
