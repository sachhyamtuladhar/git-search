import React from "react";

const Input = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
    <input
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      type="text"
      placeholder="Enter text here"
      aria-label="Text input"
    />
  </div>
  );
});

export default Input;
