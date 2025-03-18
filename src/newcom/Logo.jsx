import React from "react";
const Logo = () => (
    <div className="flex items-center">
      <div className="bg-indigo-600 rounded-lg p-1 mr-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="5" fill="white" />
        </svg>
      </div>
      <span className="text-white font-bold text-xl">CCLMS</span>
    </div>
  );

export default Logo;