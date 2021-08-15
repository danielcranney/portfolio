import React from "react";
import Link from "next/link";

const LinkedInProfile = () => {
  return (
    <div className="w-8 h-8 mb-4">
      <a href="http://www.linkedin.com/in/dan-cranney" target="_blank">
        <svg
          className="text-white transition-all duration-300 ease-in-out transform translate-y-0 opacity-50 fill-current hover:opacity-100 hover:-translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 8c0 .557-.447 1.008-1 1.008S8 8.558 8 8c0-.557.447-1.008 1-1.008S10 7.444 10 8zm0 2H8v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0V16H17v-3.359c0-3.284-3.128-3.164-4-1.548V10z" />
        </svg>
      </a>
    </div>
  );
};

export default LinkedInProfile;
