import styled, { css } from 'styled-components';

// props: width
const CommonCheckBox = ({ width, ...props }) => {
  return <StyledCheckBox type="checkbox" {...props} />;
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
