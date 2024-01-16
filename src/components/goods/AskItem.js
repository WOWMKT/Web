import React, { useEffect } from 'react';
import styled from 'styled-components';

const AskItem = ({ ask }) => {
  return (
    <Wrapper>
      <Title>{ask.title}</Title>
      <RowBox>
        <SubText>{ask.state}</SubText>

        <SubText>{ask.writer} </SubText>
        <SubTextGray>{ask.date}</SubTextGray>
      </RowBox>
    </Wrapper>
  );
};

export default AskItem;
const Wrapper = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--main, #002472);

  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  padding-left: 2rem;
`;
const Title = styled.div`
  color: var(--sub1, #003cbc);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;
const SubTextGray = styled.div`
  color: #646464;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;

  padding-left: 1rem;
`;

const SubText = styled.div`
  color: var(--main, #002472);
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;

  padding-right: 1rem;
`;
