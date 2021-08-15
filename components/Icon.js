import React from "react";

const Icon = ({
  IconType,
  columnSizing,
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
}) => {
  return (
    <div
      className={`${columnSizing} items-center flex justify-center ${padding} ${flexDirection} ${marginBottom} ${marginRight}`}
    >
      <div
        className={`${width} ${height} group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-1 translate-x-0`}
      >
        <IconType />
      </div>
      {title ? (
        <p
          className={`${titleMargins} ${titleSize} font-semibold tracking-wide opacity-100 ${textTransform}`}
        >
          {title}
        </p>
      ) : null}
    </div>
  );
};

export default Icon;
