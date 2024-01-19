import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const CommonCheckBox = ({ width, onChange, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <StyledCheckBox
      type="checkbox"
      width={width}
      checked={isChecked}
      onChange={handleCheckboxChange}
      {...props}
    />
  );
};

export default CommonCheckBox;

const StyledCheckBox = styled.input`
  width: ${(props) => (props.width ? props.width : '1.6rem')};
  height: ${(props) => (props.width ? props.width : '1.6rem')};
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #002472;
  }
`;
