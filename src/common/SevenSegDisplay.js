import React from "react";

const SevenSegDisplay = ({ segments = [] }) => {
  const segmentsEveryOff = segments.every(seg => seg === false);
  const off = segmentsEveryOff ? "#dadbe0" : "transparent";
  const on = "red";

  return (
    <svg width="150" height="150" viewBox="0 0 310.001 541.48">
      <g id="Group_1" transform="translate(-15.758 -17.26)">
        <path
          id="A"
          d="M278.759,55.26l-36,36h-144l-36-36,36-36h144Z"
          fill={segments[0] ? on : off}
          stroke={segments[0] ? on : off}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <path
          id="B"
          d="M287.759,64.427l36,36v144l-36,36-36-36v-144Z"
          fill={segments[1] ? on : off}
          stroke={segments[1] ? on : off}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <path
          id="C"
          d="M287.759,295.928l36,36v144l-36,36-36-36v-144Z"
          fill={segments[2] ? on : off}
          stroke={segments[2] ? on : off}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <path
          id="D"
          d="M278.759,520.74l-36,36h-144l-36-36,36-36h144Z"
          fill={segments[3] ? on : off}
          stroke={segments[3] ? on : off}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <path
          id="E"
          d="M53.758,295.928l36,36v144l-36,36-36-36v-144Z"
          fill={segments[4] ? on : off}
          stroke={segments[4] ? on : off}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <path
          id="F"
          d="M53.758,64.427l36,36v144l-36,36-36-36v-144Z"
          fill={segments[5] ? on : off}
          stroke={segments[5] ? on : off}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <path
          id="G"
          d="M278.759,287.927l-36,36h-144l-36-36,36-36h144Z"
          fill={segments[6] ? on : off}
          stroke={segments[6] ? on : off}
          strokeMiterlimit="10"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
};

export default SevenSegDisplay;
