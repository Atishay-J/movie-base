import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import "./dropdownCheckbox.css";

const DropdownCheckbox = ({ label, options, selectedValues, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedValues.includes(option)
      ? selectedValues.filter((item) => item !== option)
      : [...selectedValues, option];

    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  const dropdownLabel =
    selectedValues.length > 0 ? selectedValues.join(", ") : "All " + label;

  return (
    <div
      className="dropdown__checkbox"
      // onBlur={handleDropDown}
    >
      <button className="dropdown__checkbox__btn" onClick={handleDropDown}>
        <label htmlFor={label}>{dropdownLabel}</label>
        <RxCaretDown fontSize="1.2rem" />
      </button>

      <div
        name={label}
        className={`dropdown__checkbox__list dropdown__checkbox__list--${
          isDropdownOpen ? "active" : "inactive"
        }`}
      >
        {options.map((option) => (
          <div key={option} className="dropdown__checkbox__list__item">
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={selectedValues.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownCheckbox;
