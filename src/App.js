import { Component } from "react";
import Title from "./Title";
import Chrono from "./Chrono";
import style from "./Style.module.css";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 58,
      isTimerStarted: false,
      interval: null,
    };
  }

  handleTimer = () => {
    if (!this.state.isTimerStarted) {
      this.startTimer();
    } else {
      this.resetTimer();
    }
  };

  startTimer = () => {
    const intervala = setInterval(() => {
      this.setState((state) => ({
        timer: state.timer + 0.01,
      }));
    }, 10);

    this.setState({
      interval: intervala,
      isTimerStarted: true,
    });
  };

  resetTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      isTimerStarted: false,
      timer: 0,
    });
  };

  getTimer = () => this.state.timer.toFixed(2);

  render() {
    return (
      <div className={style.center}>
        <Title>Pomodoro Timer {this.getTimer()}</Title>
        <Chrono timer={this.state.timer} />
        <Button onClick={this.handleTimer}>{!this.state.isTimerStarted ? "Start" : "Stop"}</Button>
      </div>
    );
  }
}

export default App;
