import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faDeleteLeft,faDivide, faXmark, faMinus, faPlus, faEquals, faC } from "@fortawesome/free-solid-svg-icons";

function Calculator() {
  const [state, setState] = useState("");
  return (
    <>
      <div className="card-body">
        <input
          type="text"
          className="form-control bg-black border-0 text-light fs-3 text-end"
          value={state}
        />
      </div>
      <div className="bg-dark rounded-bottom">
        <div className="d-flex justify-content-between align-items-center m-2">
          <button className="btn fs-4 text-info" onClick={() => setState("")}>
          <FontAwesomeIcon icon={faC} />
          </button>

          <input
            type="button"
            value="%"
            className="btn fs-4 text-info fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid format used")
                : setState(state + e.target.value)
            }
          />

          <button className="btn fs-4 text-info"
            onClick={() => setState(state.slice(0, -1))}>
          <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
            
          <input
            type="button"
            value="/"
            className="btn fs-4 text-info fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid format used")
                : setState(state + e.target.value)
            }
          />
            
        </div>
        <div className="d-flex justify-content-between m-2">
        <input
            type="button"
            value="7"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="8"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
          <input
            type="button"
            value="9"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="*"
            className="btn fs-4 text-info fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid format used")
                : setState(state + e.target.value)
            }
          />
            
        </div>
        <div className="d-flex justify-content-between m-2">
          <input
            type="button"
            value="4"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
          <input
            type="button"
            value="5"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
          <input
            type="button"
            value="6"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="-"
            className="btn fs-4 text-info fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid format used")
                : setState(state + e.target.value)
            }
          />
            
        </div>
        <div className="d-flex justify-content-between m-2">
          <input
            type="button"
            value="1"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
          <input
            type="button"
            value="2"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
          <input
            type="button"
            value="3"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

<input
            type="button"
            value="+"
            className="btn fs-4 text-info fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid format used")
                : setState(state + e.target.value)
            }
          />
            
        </div>
        <div className="d-flex justify-content-between m-2">
          <input
            type="button"
            value="00"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
          <input
            type="button"
            value="0"
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />
          <input
            type="button"
            value="."
            className="btn fs-4 text-light"
            onClick={(e) => setState(state + e.target.value)}
          />

          <button className="btn fs-4 text-info"
            onClick={() => setState(eval(state))}>
          <FontAwesomeIcon icon={faEquals} />
          </button>
           
        </div>
      </div>
    </>
  );
}

export default Calculator;
