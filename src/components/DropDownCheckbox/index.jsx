import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import "./dropdownCheckbox.css";

const DropdownCheckbox = ({ label, options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div className="dropdown__checkbox">
      <button className="dropdown__checkbox__btn" onClick={handleDropDown}>
        <label htmlFor="language">{label}</label>
        <RxCaretDown fontSize="1.2rem" />
      </button>

      <div
        name="language"
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
              checked={selectedOptions.includes(option)}
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
