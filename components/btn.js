import React from "react";

function Btn({ children }) {
  return (
    <>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        {children}
      </button>
    </>
  );
}

export default Btn;
