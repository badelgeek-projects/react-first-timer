import { useState } from "react";
import Timer from "./Timer";
import Timerdata from "./Timerdata";
import Title from "./Title";
import style from "./Style.module.css";

const App = () => {
  const [timerDatas, setTimerDatas] = useState([]);
  const addTimerData = (timer, isPaused = false) => {
    const timerData = {
      date: new Date(),
      timer,
      state: isPaused ? "PAUSE" : "STEP",
    };
    setTimerDatas([timerData, ...timerDatas]);
  };

  return (
    <div className={`${style.container}`}>
      <div className={`${style.center}`}>
        <Title>Timer</Title>
        <Timer addTimerData={addTimerData} />
        <Timerdata timerDatas={timerDatas} />
      </div>
    </div>
  );
};

export default App;
