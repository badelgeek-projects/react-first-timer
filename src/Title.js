import { Component } from "react";
import style from "./Style.module.css";

class Title extends Component {
  render() {
    return (
      <>
        <h1 className={style.center}>{this.props.children}</h1>
      </>
    );
  }
}

export default Title;
