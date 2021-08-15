import React from "react";

const Icon = ({
  IconType,
  columnSizing,
  padding,
  width,
  height,
  title,
  marginBottom,
}) => {
  return (
    <div
      className={`${columnSizing} items-center flex justify-center ${padding} flex-col ${marginBottom}`}
    >
      <div
        className={`${width} ${height} group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-1 translate-x-0`}
      >
        <IconType />
      </div>
      {title ? (
        <p className="mt-3 text-base font-semibold tracking-wide opacity-100">
          {title}
        </p>
      ) : null}
    </div>
  );
};

export default Icon;
