import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

export default function App() {
  const [number, setNumber] = useState("");
  const [displays, setDisplays] = useState(1);
  const handleChange = e => {
    if (e.target.value && e.target.value < 10) {
      const n = parseInt(e.target.value, 10);
      setNumber(n);
    } else if (!e.target.value) {
      setNumber(e.target.value);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <input
          type="number"
          placeholder="Enter timer(0-9)"
          value={number}
          onChange={handleChange}
        />
        <button onClick={() => setDisplays(prevDisplay => prevDisplay + 1)}>
          +
        </button>
      </div>
      <div className="flex-container">
        {new Array(displays).fill(0).map((e, i) => (
          <div className="flex-item" key={i}>
            <Counter N={number} />
          </div>
        ))}
      </div>
    </div>
  );
}
