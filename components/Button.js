import React from "react";

const Button = ({ link, text, icon, square }) => {
  return (
    <a href={link} className="text-white" target="_blank">
      <button
        className={`inline-flex items-center self-start mt-2 mr-2 transition-all duration-200 ease-in-out transform translate-y-0 bg-white rounded-md no-text group bg-opacity-5 hover:bg-opacity-10 hover:-translate-y-1 ${
          square ? "w-12 btn-sm-no-text" : "btn-sm"
        }`}
      >
        {icon}
        {text ? (
          <span className={`font-semibold opacity-50 group-hover:opacity-100`}>
            {text}
          </span>
        ) : null}
      </button>
    </a>
  );
};

export default Button;
