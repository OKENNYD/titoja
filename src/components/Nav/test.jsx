import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({});
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const newPosition = {
        top: rect.bottom > viewportHeight ? "auto" : rect.top,
        bottom: rect.bottom > viewportHeight ? 0 : "auto",
        left: rect.right > viewportWidth ? "auto" : rect.left,
        right: rect.right > viewportWidth ? 0 : "auto",
      };

      setPosition(newPosition);
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        okennyd
      </button>
      {isOpen && (
        <ul
          className="absolute bg-white shadow-lg rounded mt-2 w-48"
          style={{
            top: position.top,
            bottom: position.bottom,
            left: position.left,
            right: position.right,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima fugiat, laborum velit quidem dolores aut soluta libero repudiandae voluptas numquam reprehenderit adipisci voluptate accusantium, hic dolorum ad ut! Ipsa placeat autem, id hic ea aspernatur corporis sit natus omnis commodi?
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
