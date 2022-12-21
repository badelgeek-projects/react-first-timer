import { Component } from "react";
import button from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className={`${button.btn}`}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
