import React from "react";
import GitHub from "./icons/GitHub";

const SourceButton = ({ sourceLink }) => {
  return (
    <a
      href={sourceLink}
      className="text-white"
      target="_blank"
      rel="noreferrer"
    >
      <button className="inline-flex items-center self-start mt-2 mr-2 transition-all duration-200 ease-in-out transform translate-y-0 bg-white rounded-md btn-sm group bg-opacity-5 hover:bg-opacity-10 hover:-translate-y-1">
        <GitHub />
        <span className="font-semibold opacity-50 group-hover:opacity-100">
          Source
        </span>
      </button>
    </a>
  );
};

export default SourceButton;
