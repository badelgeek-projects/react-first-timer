import { Component } from "react";
import style from "./Style.module.css";
import button from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <div className={`${style.center}`}>
        <button onClick={this.props.onClick} className={`${style.center} ${button.btn}`}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
