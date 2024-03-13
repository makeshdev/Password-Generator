import { useState } from "react";
import "../App.css";

export const PasswordGenerate = () => {
  const [length, setLength] = useState();
  const [uppercase, setUppercase] = useState();
  const [lowercase, setLowercase] = useState();
  const [number, setNumber] = useState();
  const [symbol, setSymbol] = useState();
  const [generate, setGenerate] = useState("");

  const generatePass = () => {
    let result = "";

    if (uppercase) {
      result += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase) {
      result += "abcdefghijklmnopqrstuvwxyz";
    }

    if (number) {
      result += "0123456789";
    }

    if (symbol) {
      result += "!@#$%^&*()-+_=";
    }

    let passGenerated = "";
    for (let i = 0; i < length; i++) {
      let name = Math.floor(Math.random() * result.length);
      passGenerated += result[name];
    }
    setGenerate(passGenerated);
  };

  const copyLetter = () => {
    navigator.clipboard.writeText(generate);
    alert("Password Copied..");
  };

  return (
    <>
      <div className="container">
        <h2>Password Generator</h2>
        <div className="input_sec">
          <label htmlFor="num">Password Lengths</label>
          <input
            type="number"
            id="num"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="box">
          <div className="checkbox">
            <input
              type="checkbox"
              id="upper"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <label htmlFor="upper">Include Uppercase</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="lower"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            <label htmlFor="lower">Include Lowercase</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="num1"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label htmlFor="num1">Include Number</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="Symbol"
              checked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
            />
            <label htmlFor="Symbol">Include Symbol</label>
          </div>
          <button onClick={generatePass}>Generate</button>
        </div>
        <div className="generate">
          <input type="text" value={generate} />
          <button onClick={copyLetter}>Copy</button>
        </div>
      </div>
    </>
  );
};
