import { useState } from "react";
import "./App.css";
import { TimeTable, days, getCellProps, getTimes, toTime } from "./lib";
import { sampleTimeTableData } from "./sample/sampleTimeTableData";

function App() {
  const [data, setData] = useState<TimeTable>(sampleTimeTableData);

  return (
    <>
      <header>
        <h1>Time Table Beautifier</h1>
      </header>

      <div className="content-container">
        <table>
          <thead>
            <tr>
              <th></th>
              {days.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getTimes().map((time, index) => {
              return (
                <tr key={index}>
                  <th>{toTime(time)}</th>
                  {[0, 1, 2, 3, 4].map((date, index) => {
                    const props = getCellProps(date, time, data);

                    const isEmpty = props.color === "transparent";
                    const upperBorder = props.isStart
                      ? "1px solid black"
                      : "none";
                    const bottomBorder = props.isEnd
                      ? "1px solid black"
                      : "none";

                    return (
                      <td
                        key={index}
                        style={
                          isEmpty
                            ? {}
                            : {
                                backgroundColor: props.color,
                                borderTop: upperBorder,
                                borderBottom: bottomBorder,
                              }
                        }
                        className={isEmpty ? "" : "time-cell"}
                      >
                        {props.text}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
