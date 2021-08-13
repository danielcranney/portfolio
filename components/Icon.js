import React from "react";

const Icon = ({ IconType, columnSizing, padding, width, height, title }) => {
  return (
    <div
      className={`${columnSizing} items-center flex justify-center ${padding} flex-col`}
    >
      <div className={`${width} ${height} group`}>
        <IconType />
      </div>
      {title ? (
        <p className="text-base opacity-100 mt-3 tracking-wide font-semibold">
          {title}
        </p>
      ) : null}
    </div>
  );
};

export default Icon;
