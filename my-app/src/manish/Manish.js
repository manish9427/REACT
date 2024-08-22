import "./Manish.css";
import Counter from "./counter/Counter"
import Timer from "./timer/Timer";
import StopWatch from "./stopwatch/StopWatch";
import UseFetchHook from "./hooks/UseFetchHook";
import FakeStore from "./fakestore/FakeStore";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { ProductDetails } from "./fakestore/ProductDetails";
import { Todo } from "./todo/Todo";
import HomePage from "./homePage/HomePage";
import ProgressBar from "./progress-bar/ProgressBar";
const Manish = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/timer" element={<Timer />}/>
        <Route path="/stopwatch" element={<StopWatch />}/>
        <Route path="/fakestore" element={<FakeStore/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/progressBar" element={<ProgressBar/>}/>
      </Routes>
    </Router>

  );
};

export default Manish;
