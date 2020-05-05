import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import SevenSegDisplay from "./common/SevenSegDisplay";

export default function Counter({ N }) {
  const interval = useRef();
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
    clearInterval(interval.current);
    let timer = N;
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
      9: [true, true, true, true, false, true, true],
      "": [false, false, false, false, false, false, false]
    };
    interval.current = setInterval(() => {
      if (timer !== "") {
        console.log("Timer: ", timer);
        setSegments(states[timer]);
        if (timer === 0) {
          clearInterval(interval.current);
        } else {
          timer -= 1;
        }
      } else {
        setSegments(states[timer]);
        clearInterval(interval.current);
      }
    }, 1000);
  }, [N]);

  return (
    // <div className="App">
    //   {/* {new Array(7).fill(0).map((e, i) => (
    //     <div
    //       style={{ background: segments[i] ? "red" : "transparent" }}
    //       key={i}
    //     />

    //   ))} */}

    // </div>
    <SevenSegDisplay segments={segments} />
  );
}

//  <SevenSegDisplay />
