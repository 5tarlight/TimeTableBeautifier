import "./App.css";
import { days, getTimes } from "./lib";

function App() {
  return (
    <>
      <header>
        <h1>Time Table Beautifier</h1>
      </header>

      <div className="content-container">
        <table>
          <thead>
            <tr>
              {days.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getTimes().map((time, index) => {
              return (
                <tr key={index}>
                  <th>{time}</th>
                  {[0, 1, 2, 3, 4].map((i, index) => {
                    return (
                      <td key={index}>
                        {time}-{i}
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
