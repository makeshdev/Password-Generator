import { useState } from "react";

export const PasswordGenerate = () => {
  const [length, setLength] = useState(6);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
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

  return (
    <>
      <div className="container">
        <h2>Password Generator</h2>
        <div>
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
              id="num"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label htmlFor="num">Include Number</label>
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
        </div>
        <div className="generate">
          <button onClick={generatePass}>Generate</button>
          <input type="text" value={generate} />
        </div>
      </div>
    </>
  );
};
