import React, { useState } from 'react';
import styled from 'styled-components';

const UnivToggle = ({ isAllSchools, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected(!isSelected);
    onSelect(!isSelected);
  };

  return (
    <ToggleButton onClick={handleToggle} isSelected={isSelected}>
      {isAllSchools ? '전체 학교' : '우리학교'}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  color: #646464;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: ${(props) => (props.isSelected ? '#002472' : '#646464')};
  }

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

export default UnivToggle;
