import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Counter({ N }) {
  const states = {
    0: [true, true, true, true, true, true, false],
    1: [false, true, true, false, false, false, false],
    2: [true, true, false, true, true, false, true],
    3: [true, true, true, true, false, false, true],
    4: [false, true, true, false, false, true, true],
    5: [true, false, true, true, false, true, true],
    6: [true, false, true, true, true, true, true],
    7: [true, true, true, false, false, false, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true]
  };

  const [segments, setSegments] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  useEffect(() => {
    setSegments(states[N]);
  }, [N]);

  return (
    <div className="App">
      <div
        style={{ background: segments && segments[0] ? "red" : "transparent" }}
      />
      <div
        style={{ background: segments && segments[1] ? "red" : "transparent" }}
      />
      <div
        style={{ background: segments && segments[2] ? "red" : "transparent" }}
      />
      <div
        style={{ background: segments && segments[3] ? "red" : "transparent" }}
      />
      <div
        style={{ background: segments && segments[4] ? "red" : "transparent" }}
      />
      <div
        style={{ background: segments && segments[5] ? "red" : "transparent" }}
      />
      <div
        style={{ background: segments && segments[6] ? "red" : "transparent" }}
      />
    </div>
  );
}
