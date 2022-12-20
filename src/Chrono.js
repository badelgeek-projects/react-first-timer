import { Component } from "react";
import style from "./Style.module.css";

class Chrono extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: this.formatNumber(0),
      minutes: this.formatNumber(0),
      seconds: this.formatNumber(0),
    };
  }

  formatNumber = (number) => ("0" + number).slice(-2);

  decomposeTime = (timeInSeconds) => {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = (timeInSeconds % 3600) % 60;
    this.setState({
      hours: this.formatNumber(hours),
      minutes: this.formatNumber(minutes),
      seconds: this.formatNumber(seconds),
    });
  };

  componentDidMount() {
    console.log("CHORNO");
    this.decomposeTime(this.props.timer);
  }

  render() {
    return (
      <div className={style.center}>
        <p
          style={{
            fontSize: 48,
            fontWeight: "bold",
          }}
        >
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </p>
      </div>
    );
  }
}

export default Chrono;
