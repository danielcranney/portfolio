import React from "react";

const Icon = ({
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
    <div
      className={`items-center flex justify-start ${padding} ${flexDirection} ${marginBottom} ${marginRight} ${fixedHeight} sm:h-auto`}
    >
      <div
        className={`${width} ${height} group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0`}
      >
        <IconType />
      </div>
      {title ? (
        <>
          {/* <p
          className={`${titleMargins} ${titleSize} font-semibold tracking-wide opacity-100 ${textTransform} text-center`}
        >
          {title}
        </p>
      ) : null} */}
        </>
      ) : null}
    </div>
  );
};

export default Icon;
