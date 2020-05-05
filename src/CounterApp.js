import React, { useState, useRef } from "react";
import Counter from "./CounterAppChild";
import "./styles.css";

export default function App() {
  const timer = useRef();
  const interval = useRef();
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  const handleChange = e => {
    if (e.target.value < 1000) setNumber(e.target.value);
  };

  const handleClick = e => {
    window.clearInterval(interval.current);
    timer.current = parseInt(number, 10);
    interval.current = setInterval(() => {
      let digits =
        timer.current < 10
          ? "00" + timer.current
          : timer.current < 100
          ? "0" + timer.current
          : "" + timer.current;

      digits.split("").forEach((digit, index) => {
        switch (index) {
          case 0:
            setNumber1(parseInt(digit, 10));
            break;
          case 1:
            setNumber2(parseInt(digit, 10));
            break;
          case 2:
            setNumber3(parseInt(digit, 10));
            break;
          default:
            break;
        }
      });

      console.log("digits: ", digits);
      console.log("Timer: ", timer.current);
      if (timer.current === 0) {
        window.clearInterval(interval.current);
      } else {
        timer.current -= 1;
      }
    }, 1000);
  };

  return (
    <div className="container">
      <input type="number" value={number} onChange={handleChange} />
      <button onClick={handleClick}>Set Timer</button>
      <div className="flex-container">
        <div className="flex-item">
          <Counter N={number1 || 0} />
        </div>
        <div className="flex-item">
          <Counter N={number2 || 0} />
        </div>
        <div className="flex-item">
          <Counter N={number3 || 0} />
        </div>
      </div>
    </div>
  );
}
