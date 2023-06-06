import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<string[]>([]);

  return (
    <>
      <h1>Ticket System</h1>
      <div className="card">
        <div className="submit">
          <h2>Home Page</h2>
          <button>Add Ticket</button>
        </div>
        <div className="history-section">
          <div className="container">
            {history.length === 0 ? (
              <p>No Tickets</p>
            ) : (
              <>
                {history.map((old) => {
                  return <p>{old}</p>;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
