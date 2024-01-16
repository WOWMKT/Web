import React, { useState } from 'react';
import styled from 'styled-components';

//<CommonDropDown options={categoryOptions} onSelect={handleSelect} />

const CommonDropDown = ({ options, onSelect, style = {} }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    setSelectedOption(selectedOption);

    if (onSelect) {
      onSelect(selectedOption);
    }
  };

  return (
    <Select
      value={selectedOption.value}
      onChange={handleSelectChange}
      style={style}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default CommonDropDown;

const Select = styled.select`
  width: 40%;
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray3, #c1c1c1);
  outline: none;
  cursor: pointer;

  ${(props) => props.style};
`;
