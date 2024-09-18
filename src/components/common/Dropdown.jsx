// import React, { useState } from "react";

// const Dropdown = ({ options, selectedValue, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (option) => {
//     onSelect(option); // Call the parent handler with the selected option
//     setIsOpen(false); // Close the dropdown after selection
//   };

//   return (
//     <div className="relative inline-block w-full">
//       <div
//         className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {selectedValue || "Select an option"}
//       </div>
//       {isOpen && (
//         <ul className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg w-full">
//           {options.map((option, index) => (
//             <li
//               key={index}
//               className="p-3 hover:bg-blue-200 cursor-pointer"
//               onClick={() => handleSelect(option)}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;