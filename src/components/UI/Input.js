import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";


const Input = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
      {label &&
        <label htmlFor={props.id} className="form-label  text-gray-700">
          {label}
        </label>
      }
       <SearchIcon className="h-5 w-5 text-gray-700 ml-2 mr-1" />
      <input
        ref={ref}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Enter text here"
        aria-label="Text input"
        {...props}
      />
    </div>
  );
});

export default Input;
