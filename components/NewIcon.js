import React from "react";

const NewIcon = ({
  IconType,
  padding,
  width,
  height,
  flexDirection,
  title,
  titleMargins,
  titleSize,
  marginBottom,
  marginRight,
  textTransform,
  fixedHeight,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 132.19 132.19"
    >
      <rect
        width="100.97"
        height="100.97"
        x="15.61"
        y="15.61"
        fill="#DFB537"
        strokeWidth="0"
        opacity="0.2"
        rx="12.81"
        ry="12.81"
        transform="rotate(45 66.096 66.088)"
      ></rect>
      <g fill="#face16" strokeWidth="0">
        <rect
          width="9.95"
          height="49.75"
          x="61.04"
          y="41.14"
          rx="4.98"
          ry="4.98"
          transform="rotate(45 66.012 66.023)"
        ></rect>
        <path d="M71.15 38.03c0 1.27-.49 2.55-1.46 3.52L59.13 52.1a4.973 4.973 0 01-7.03 0 4.967 4.967 0 010-7.04l7.03-7.03-7.22-7.23a4.955 4.955 0 010-7.03 4.96 4.96 0 017.03 0L69.5 34.32s.06.06.09.1c.04.03.07.06.1.09a4.96 4.96 0 011.46 3.52zM80.28 108.43a4.973 4.973 0 01-7.03 0L62.69 97.87a4.973 4.973 0 010-7.03l10.56-10.55a4.955 4.955 0 017.03 0c.97.97 1.45 2.24 1.45 3.51s-.48 2.55-1.45 3.52l-7.03 7.04 7.03 7.03a4.985 4.985 0 010 7.04z"></path>
      </g>
    </svg>
  );
};

export default NewIcon;
