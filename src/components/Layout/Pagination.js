import React from "react";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrowLeft.svg"
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRight.svg"


const Pagination = ({ currentPage, onHandlePage, size }) => {
  const activeClass = "bg-blue-500-600 text-white hover:bg-blue-3000 ";
  const disabledClass =
    "bg-gray-500 hover:bg-gray-500 hover:cursor-default hover:text-gray-500";

  const lastPage = Math.ceil(size / 25) > 40 ? 40 : Math.ceil(size / 25);
  const listOfFirstPages = [1, 2, 3]
  const listOfLastPages = [lastPage - 2, lastPage - 1, lastPage]

  return lastPage > 1 && <div class="flex justify-center items-center mt-4">
    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
      <button onClick={() => {
        if (currentPage <= 1) return;
        onHandlePage(+currentPage - 1);
      }}
        className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-blue-500 text-sm font-medium text-white hover:bg-blue-300 ${+currentPage === 1 ? disabledClass : "hover:cursor-pointer"
          }`}>
        <span className="sr-only">Previous</span>
        <ArrowLeft fill="#fff" />
      </button>
      {listOfFirstPages.map(pageNumber => <button key={pageNumber}  onClick={() => {
          if (currentPage >= lastPage) return;
          onHandlePage(pageNumber);
        }} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 text-sm font-medium text-white hover:bg-blue-300">{pageNumber}</button>)}
      <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 text-sm font-medium text-white">...</span>
      {listOfLastPages.map(pageNumber => <button key={pageNumber} onClick={() => {
          if (currentPage >= lastPage) return;
          onHandlePage(pageNumber);
        }}  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 text-sm font-medium text-white hover:bg-blue-300">{pageNumber}</button>)}

      <button
        onClick={() => {
          if (currentPage >= lastPage) return;
          onHandlePage(+currentPage + 1);
        }}
        className={`relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-blue-500 text-sm font-medium text-white hover:bg-blue-300 ${+currentPage === lastPage
          ? disabledClass
          : "hover:cursor-pointer"
          }`}>
        <span className="sr-only">Next</span>
        <ArrowRight fill="#fff" />
      </button>
    </nav>
  </div>
};

export default Pagination;



// lastPage > 1 && (
//   <div className="flex justify-center">
//     <ul className="flex gap-6 py-4 font-redHat">
//       <li
//         onClick={() => {
//           if (currentPage <= 1) return;
//           onHandlePage(+currentPage - 1);
//         }}
//         className={`flex items-center  hover:text-blue-600 ${+currentPage === 1 ? disabledClass : "hover:cursor-pointer"
//           }`}
//       >
//         prev
//       </li>
//       <li
//         className={`px-4 py-2 rounded-md hover:cursor-pointer ${activeClass} `}
//       >
//         {currentPage}
//       </li>
//       <li
//         onClick={() => {
//           if (currentPage >= lastPage) return;
//           onHandlePage(+currentPage + 1);
//         }}
//         className={`flex items-center  hover:text-blue-600 ${+currentPage === lastPage
//             ? disabledClass
//             : "hover:cursor-pointer"
//           }`}
//       >
//         next
//       </li>
//     </ul>
//   </div>
// )