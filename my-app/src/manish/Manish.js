import Timer from "./timer/Timer";
import StopWatch from "./stopwatch/StopWatch";
import UseFetchHook from "./hooks/UseFetchHook";
import FakeStore from "./fakestore/FakeStore";
import "./Manish.css";

const Manish = () => {
  return (
    <div className="manish">
      <FakeStore />
      {/* <UseFetchHook /> */}
      {/* <StopWatch /> */}
      {/* <Timer /> */}
    </div>
  );
};

export default Manish;
