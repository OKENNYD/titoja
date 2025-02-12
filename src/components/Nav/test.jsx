// import React, { useState, useRef, useEffect } from "react";

// const Dropdown = ({ options, label }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [position, setPosition] = useState({});
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (isOpen && dropdownRef.current) {
//       const rect = dropdownRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;
//       const viewportWidth = window.innerWidth;

//       const newPosition = {
//         top: rect.bottom > viewportHeight ? "auto" : rect.top,
//         bottom: rect.bottom > viewportHeight ? 0 : "auto",
//         left: rect.right > viewportWidth ? "auto" : rect.left,
//         right: rect.right > viewportWidth ? 0 : "auto",
//       };

//       setPosition(newPosition);
//     }
//   }, [isOpen]);

//   return (
//     <div className="relative inline-block" ref={dropdownRef}>
//       <button
//         onClick={toggleDropdown}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         okennyd
//       </button>
//       {isOpen && (
//         <ul
//           className="absolute bg-white shadow-lg rounded mt-2 w-48"
//           style={{
//             top: position.top,
//             bottom: position.bottom,
//             left: position.left,
//             right: position.right,
//           }}
//         >
//           {options.map((option, index) => (
//             <li
//               key={index}
//               className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//             >
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
//                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;


"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const MultipleSelect = ({
  items,
  selectedItems,
  onItemInserted,
  onItemCleared,
  className,
  placeholder,
  label,
  description,
  errorMessage,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedKeys, setSelectedKeys] = useState(
    selectedItems.map((item) => item.id)
  );
  const inputRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (item) =>
          !selectedKeys.includes(item.id) &&
          item.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue, items, selectedKeys]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectionChange = (item) => {
    if (!selectedKeys.includes(item.id)) {
      setSelectedKeys((prev) => [...prev, item.id]);
      onItemInserted?.(item.id);
    }
    setInputValue("");
  };

  const handleRemove = (id) => {
    setSelectedKeys((prev) => prev.filter((key) => key !== id));
    onItemCleared?.(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && inputValue === "") {
      const lastKey = selectedKeys[selectedKeys.length - 1];
      if (lastKey) {
        handleRemove(lastKey);
      }
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1">{label}</label>}
      <div className="relative">
        <div className="flex flex-wrap items-center border rounded-lg p-1">
          {selectedKeys.map((key) => {
            const item = items.find((i) => i.id === key);
            return (
              <span
                key={key}
                className="bg-gray-200 rounded-full px-2 py-1 mr-1"
              >
                {item?.name}
                <button
                  type="button"
                  onClick={() => handleRemove(key)}
                  className="ml-1 text-red-500"
                >
                  x
                </button>
              </span>
            );
          })}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 border-none outline-none"
          />
        </div>
        {inputValue && filteredItems.length === 0 && (
          <div className="absolute bg-white border rounded-lg mt-1">
            <div className="p-2">
              No results found for: <strong>{inputValue}</strong>
            </div>
          </div>
        )}
        {inputValue && filteredItems.length > 0 && (
          <div className="absolute bg-white border rounded-lg mt-1">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectionChange(item)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
      {description && <div className="text-gray-500">{description}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <input
        type="hidden"
        name="selectedKeys"
        value={selectedKeys.join(",")}
        readOnly
      />
    </div>
  );
};

export default MultipleSelect;