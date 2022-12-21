import { Component } from "react";

class Chrono extends Component {
  formatNumber = (number) => ("0" + number).slice(-2);

  formatTimer = (timeInSeconds) => {
    let h = Math.floor(timeInSeconds / 3600);
    let m = Math.floor((timeInSeconds % 3600) / 60);
    let s = Math.floor(timeInSeconds % 3600) % 60;
    let ms = (timeInSeconds % 1).toString().slice(2, 4) || 0;

    h = this.formatNumber(h);
    m = this.formatNumber(m);
    s = this.formatNumber(s);
    ms = this.formatNumber(ms);

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
    return <div>{this.formatTimer(this.props.timer)}</div>;
  }
}

export default Chrono;
