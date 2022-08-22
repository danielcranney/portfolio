import React from "react";

const ExternalLink = ({ square }) => {
  return (
    <svg
      className={`w-6 h-6 ${
        !square ? "mr-2" : "mr-0"
      } dark:opacity-50 opacity-70 group-hover:opacity-100`}
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
  );
};

export default ExternalLink;
