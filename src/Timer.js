import { useState } from "react";
import Button from "./Button";
import { secondsToTime } from "./utils/time";
import style from "./Timer.module.css";

const createTimer = () => {
  return {
    value: 0,
    isTimerStarted: false,
    isTimerPaused: false,
    interval: null,
  };
};

const Timer = (props) => {
  const [timer, setTimer] = useState(createTimer);

  const handleStartStopTimer = () => {
    if (!timer.isTimerStarted && !timer.isTimerPaused) {
      startTimer();
      handleAddTimerData();
    } else {
      resetTimer();
    }
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((t) => ({
        ...t,
        value: t.value + 0.01,
      }));
    }, 10);

    setTimer({
      ...timer,
      interval: interval,
      isTimerStarted: true,
      isTimerPaused: false,
    });
  };

  const handleAddTimerData = () => {
    if (isTimerRunning()) {
      props.addTimerData(timer.value);
    }
  };

  const resetTimer = () => {
    timer.interval && clearInterval(timer.interval);
    setTimer(createTimer());
  };

  const handlePauseRestartTimer = () => {
    if (isTimerRunning()) {
      setTimer({
        ...timer,
        isTimerPaused: true,
      });
      timer.interval && clearInterval(timer.interval);
      props.addTimerData(timer.value, true);
    } else {
      startTimer();
    }
  };

  const isTimerRunning = () => timer.isTimerStarted && !timer.isTimerPaused;

  const formatTimer = (timeInSeconds) => {
    const { h, m, s, ms } = secondsToTime(timeInSeconds);

    return (
      <p
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        {h}:{m}:{s}
        <span style={{ fontSize: "2rem" }}>.{ms}</span>
      </p>
    );
  };

  return (
    <>
      <div>{formatTimer(timer.value)}</div>
      <div className={style["progress-wrapper"]}>
        <div
          className={style["progress-bar"]}
          style={{ width: `${((timer.value % 60) * 100) / 60}%` }}
        ></div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <Button onClick={handleStartStopTimer}>{timer.isTimerStarted ? "Reset" : "Start"}</Button>
        <Button onClick={handleAddTimerData}>+</Button>
        <Button onClick={handlePauseRestartTimer}>{isTimerRunning() ? "Pause" : "Restart"}</Button>
      </div>
    </>
  );
};

export default Timer;
