import { Component, Fragment } from "react";
import Title from "./Title";
import Chrono from "./Chrono";
import style from "./Style.module.css";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
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
        timer: ++state.timer,
      }));
    }, 1000);

    this.setState({
      interval: intervala,
      isTimerStarted: true,
    });
  };

  resetTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      isTimerStarted: true,
      timer: 0,
    });
  };

  render() {
    return (
      <>
        <div className={style.alignCenter}>
          <Title>Pomodoro Timer {this.state.timer}</Title>
          <Chrono timer={this.state.timer} />
          <Button onClick={this.handleTimer}>Start</Button>
        </div>
      </>
    );
  }
}

export default App;
