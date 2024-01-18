import { useCallback, useEffect, useRef, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!~`@#$%^&*()'?/><,";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopyBtnText("Copied");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
    setCopyBtnText("Copy");
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-black"
        style={{ height: "100vh" }}
      >
        <div className="card bg-dark">
          <div className="card-body text-white">
            <h4 className="text-center">Password Generator</h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                readOnly
                min={8}
                max={100}
                value={password}
                ref={passwordRef}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={copyPasswordToClipboard}
              >
                {copyBtnText}
              </button>
            </div>
            <div className="d-flex gap-3">
              <input
                type="range"
                className="form-range"
                id="range"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="range">Length:{length}</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onChange={() => {
                    setNumAllowed((prev) => !prev);
                  }}
                />
                <label className="form-check-label">Number</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label className="form-check-label">Character</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
