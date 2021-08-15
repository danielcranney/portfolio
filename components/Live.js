import React from "react";

const Live = ({ liveLink }) => {
  return (
    <a href={liveLink} className="text-white" target="_blank">
      <button className="inline-flex items-center self-start mt-2 mr-2 transition-all duration-200 ease-in-out transform translate-y-0 bg-white rounded-md btn-sm group bg-opacity-5 hover:bg-opacity-10 hover:-translate-y-1">
        <svg
          className="w-6 h-6 mr-2 opacity-50 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
        <span className="font-semibold opacity-50 group-hover:opacity-100">
          Live
        </span>
      </button>
    </a>
  );
};

export default Live;
