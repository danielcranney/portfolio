import React from "react";

const Live = () => {
  return (
    <button className="inline-flex items-center self-start my-2 btn-sm bg-white rounded-md group bg-opacity-5 hover:bg-opacity-20 transition duration-200 ease-in-out">
      <svg
        className="w-6 h-6 mr-2 group-hover:opacity-100 opacity-50"
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
      <span className="group-hover:opacity-100 opacity-50 font-semibold">
        Live
      </span>
    </button>
  );
};

export default Live;
