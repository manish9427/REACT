import Timer from "./timer/Timer";
import StopWatch from "./stopwatch/StopWatch";
import UseFetchHook from "./hooks/UseFetchHook";
import FakeStore from "./fakestore/FakeStore";
import "./Manish.css";
import Counter from "./counter/Counter"
const Manish = () => {
  return (
    <div className="manish">
      {/* <Counter/> */}
      {/* <Timer /> */}
      {/* <StopWatch /> */}
      {/* <UseFetchHook /> */}
      <FakeStore />
    </div>
  );
};

export default Manish;
