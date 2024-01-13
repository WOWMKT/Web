import styled, { css } from 'styled-components';
import BackIcon from '../../assets/icon/BackIcon';

//props: children

const BackTopBar = ({ children }) => {
  return (
    <StyledTopBar>
      <BackIcon />
      {children}
    </StyledTopBar>
  );
};

export default BackTopBar;

const StyledTopBar = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  padding: 3rem;
  gap: 10rem;

  color: var(--black, #000);

  /* Heading */
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  text-transform: capitalize;

  background-color: white;
`;
