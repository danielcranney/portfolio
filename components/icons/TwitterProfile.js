import React from "react";

const TwitterProfile = () => {
  return (
    <div className="w-8 h-8 mb-4">
      <a
        href="https://twitter.com/danielcranney"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          className="text-white transition-all duration-300 ease-in-out transform translate-y-0 opacity-50 fill-current hover:opacity-100 hover:-translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.778a4.928 4.928 0 01-1.414.388 2.473 2.473 0 001.083-1.362 4.926 4.926 0 01-1.564.597 2.464 2.464 0 00-4.195 2.245 6.993 6.993 0 01-5.074-2.572 2.465 2.465 0 00.762 3.287 2.457 2.457 0 01-1.114-.308c-.027 1.14.791 2.207 1.975 2.445a2.467 2.467 0 01-1.112.042 2.465 2.465 0 002.3 1.709A4.955 4.955 0 016.5 16.27a6.963 6.963 0 003.773 1.106c4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
        </svg>
      </a>
    </div>
  );
};

export default TwitterProfile;
