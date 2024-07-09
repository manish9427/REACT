import React, { useState, useEffect } from "react";

import "./StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [previousTime, setPreviousTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update time every 10 ms
      }, 10); // Update every 10 milliseconds
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const startStop = () => {
    if (!isRunning && !isPaused) {
      setIsRunning(true);
      setPreviousTime(Date.now());
    } else {
      setIsRunning(!isRunning);
      if (isRunning) {
        setPreviousTime(Date.now());
      }
    }
    setIsPaused(false); // Reset isPaused when start button is clicked
  };

  const pause = () => {
    setIsPaused(!isPaused);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
    setIsPaused(false);
    setPreviousTime(0); // Reset previous time
  };

  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const millisecondsPart = Math.floor((milliseconds % 1000) / 10);

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    const formattedMilliseconds = millisecondsPart.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={startStop}>
        {isRunning && !isPaused ? "Stop" : "Start"}
      </button>
      <button onClick={pause}>
        {isRunning && !isPaused ? "Pause" : "Resume"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default StopWatch;
