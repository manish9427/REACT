import "./Manish.css";
import Counter from "./counter/Counter"
import Timer from "./timer/Timer";
import StopWatch from "./stopwatch/StopWatch";
import UseFetchHook from "./hooks/UseFetchHook";
import FakeStore from "./fakestore/FakeStore";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { ProductDetails } from "./fakestore/ProductDetails";
const Manish = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<FakeStore/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        {/* <Route path="" element={<Counter/>}/>
        <Route path="" element={<Timer />}/>
        <Route path="" element={<StopWatch />}/>
        <Route path="" element={<StopWatch />}/> */}
      </Routes>
    </Router>

  );
};

export default Manish;
