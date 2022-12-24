import { Component } from "react";
import Timer from "./Timer";
import Timerdata from "./Timerdata";
import Title from "./Title";
import style from "./Style.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerDatas: [],
    };
  }

  addTimerData = (timer, isPaused = false) => {
    const timerData = {
      date: new Date(),
      timer,
      state: isPaused ? "PAUSE" : "STEP",
    };
    this.setState((state) => ({
      timerDatas: [...state.timerDatas, timerData],
    }));
  };

  render() {
    return (
      <div className={style.center}>
        <Title>Pomodoro Timer</Title>
        <Timer addTimerData={this.addTimerData} />

        <Timerdata timerDatas={this.state.timerDatas} />
      </div>
    );
  }
}

export default App;
