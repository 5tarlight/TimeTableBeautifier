import { useState } from "react";
import "./App.css";
import { TimeTable, days, getCellProps, getTimes, toTime } from "./lib";

function App() {
  const [data, setData] = useState<TimeTable>([
    [
      {
        color: "red",
        end: 11,
        start: 7,
        location: "공학관 407",
        name: "웹프로그래밍",
        professor: "김교수",
      },
    ],
    [
      {
        color: "yellowgreen",
        start: 4,
        end: 8,
        name: "운영체제",
        professor: "박교수",
        location: "공학관 301",
      },
      {
        color: "lightcoral",
        start: 10,
        end: 14,
        name: "컴퓨터구조",
        professor: "이교수",
        location: "공학관 401",
      },
    ],
    [],
    [
      {
        color: "skyblue",
        start: 1,
        end: 6,
        name: "데이터베이스",
        professor: "최교수",
        location: "창의관 304",
      },
    ],
    [],
  ]);

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

                    return (
                      <td
                        key={index}
                        style={{
                          backgroundColor: props.color,
                        }}
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
