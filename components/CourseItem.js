import React from "react";

export const CourseItem = ({ courseTitle, link }) => {
  return (
    <a
      href={`${link}`}
      target="_blank"
      className="flex items-center w-full text-mid dark:text-light hover:text-dark dark:hover:text-white border-b border-light/40 dark:border-dark last:border-0 group"
    >
      <div className="flex items-center w-full p-2 justify-between">
        <p className="text-sm mb-0 font-medium text-mid group-hover:text-dark dark:text-light dark:group-hover:text-white">
          {courseTitle}
        </p>
        <svg
          className="w-5 h-5"
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
      </div>
    </a>
  );
};
