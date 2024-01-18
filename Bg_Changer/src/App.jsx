import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bgColor, setBgColor] = useState("olive");
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: bgColor }}
      >
        <div className="card bg-dark">
          <div className="card-body d-flex flex-wrap gap-3">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => setBgColor("#0b5ed7")}
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => setBgColor("#5c636a")}
            >
              Secondary
            </button>
            <button
              type="button"
              class="btn btn-success"
              onClick={() => setBgColor("#157347")}
            >
              Success
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => setBgColor("#bb2d3b")}
            >
              Danger
            </button>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => setBgColor("#ffca2c")}
            >
              Warning
            </button>
            <button
              type="button"
              class="btn btn-info"
              onClick={() => setBgColor("#31d2f2")}
            >
              Info
            </button>
            <button
              type="button"
              class="btn btn-light"
              onClick={() => setBgColor("#ffffff")}
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
