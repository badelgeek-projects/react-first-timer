import { Component } from "react";
import Button from "./Button";
import { secondsToTime } from "./utils/time";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      isTimerStarted: false,
      isTimerPaused: false,
      interval: null,
    };
  }

  handleStartStopTimer = () => {
    if (!this.state.isTimerStarted && !this.state.isTimerPaused) {
      this.startTimer();
      this.handleAddTimerData();
    } else {
      this.resetTimer();
    }
  };

  startTimer = () => {
    const intervale = setInterval(() => {
      this.setState((state) => ({
        timer: state.timer + 0.01,
      }));
    }, 10);

    this.setState({
      interval: intervale,
      isTimerStarted: true,
      isTimerPaused: false,
    });
  };

  handleAddTimerData = () => {
    if (this.isTimerRunning()) {
      this.props.addTimerData(this.state.timer);
    }
  };

  resetTimer = () => {
    this.state.interval && clearInterval(this.state.interval);
    this.setState({
      interval: null,
      isTimerStarted: false,
      isTimerPaused: false,
      timer: 0,
      timerData: [],
    });
  };

  handlePauseRestartTimer = () => {
    if (this.isTimerRunning()) {
      this.state.interval && clearInterval(this.state.interval);
      this.setState({
        isTimerPaused: true,
      });
      this.props.addTimerData(this.state.timer, true);
    } else {
      this.startTimer();
    }
  };

  isTimerRunning = () => this.state.isTimerStarted && !this.state.isTimerPaused;

  getTimer = () => this.state.timer.toFixed(2);

  formatTimer = (timeInSeconds) => {
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

  render() {
    return (
      <>
        <div>{this.formatTimer(this.state.timer)}</div>
        <div style={{ marginBottom: 36 }}>
          <Button onClick={this.handleStartStopTimer}>
            {this.state.isTimerStarted ? "Stop" : "Start"}
          </Button>
          <Button onClick={this.handleAddTimerData}>+</Button>
          <Button onClick={this.handlePauseRestartTimer}>
            {this.isTimerRunning() ? "Pause" : "Restart"}
          </Button>
        </div>
      </>
    );
  }
}

export default Timer;
