import { secondsToTime } from "./utils/time";
import style from "./Style.module.css";

const css = {
  table: {
    color: "bisque",
    borderCollapse: "collapse",
    margin: "0 auto",
  },
  cell: {
    borderBottom: "1px solid chocolate",
    backgroundColor: "tomato",
    padding: "2px 8px",
  },
};

const formatTimer = (timer) => {
  const { h, m, s, ms } = secondsToTime(timer);
  return (
    <>
      {h}:{m}:{s}:<span style={{ fontSize: "0.8rem" }}>{ms}</span>
    </>
  );
};

const Timerdata = (props) => {
  const displayTimerDatas = () => {
    return (
      <div className={style.center}>
        <table style={css.table}>
          <thead>
            <tr key="thead">
              <th style={css.cell}>Date</th>
              <th style={css.cell}>Timer</th>
              <th style={{ ...css.cell, width: "20%" }}>State</th>
            </tr>
          </thead>
          <tbody>
            {props.timerDatas.map((timerData) => (
              <tr key={Math.random()}>
                <td style={css.cell}>{timerData.date.toLocaleString()}</td>
                <td style={css.cell}>{formatTimer(timerData.timer)}</td>
                <td style={css.cell}>{timerData.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return props.timerDatas.length ? displayTimerDatas() : null;
};

export default Timerdata;
