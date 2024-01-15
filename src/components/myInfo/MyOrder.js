import React, { useEffect } from 'react';
import styled from 'styled-components';
import BackTopBar from '../common/BackTopBar';

const MyOrder = () => {
  return (
    <Wrapper>
      <BackTopBar children={'나의 주문'} />
    </Wrapper>
  );
};

export default MyOrder;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Caption = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main, #002472);

  /* Sub Text */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;
  margin-bottom: 0; /* To remove any default margin */
`;

const UserInfoTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;

  gap: 1.8rem;
  color: #646464;

  /* Heading */
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  text-transform: capitalize;
`;

const UserInfoBody = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  border-bottom: 1px solid #bebebe;
  padding-bottom: 3rem;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: row;
`;

const StackLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;

  color: #646464;

  /* Body 1 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;
const StackRight = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;

  color: var(--black, #000);

  /* Body 1 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const UserInfoFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const MyInfoBut = styled.button`
  height: 4.8rem;
  border-radius: 3rem;
  border: 1px solid var(--sub1, #003cbc);
  color: var(--main, #002472);

  /* Sub Text */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;
`;
