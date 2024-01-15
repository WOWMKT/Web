import React, { useState } from 'react';
import styled from 'styled-components';
import StepStateBar from './StepStateBar';

const StepHeader = ({ step, isDemand = false }) => {
  const stepTitleListProject = [
    '판매자 정보',
    '수령 정보',
    '상품 정보',
    '추가 질문',
    '동의 확인 및 등록',
  ];
  const stepTitleListDemand = [
    '판매자 정보',
    '상품 정보',
    '추가 질문',
    '동의 확인 및 등록',
  ];
  return (
    <Wrapper>
      <Title>{isDemand ? '수요조사 등록폼' : '판매 등록폼'}</Title>

      <StepStateBar
        stepTitleList={isDemand ? stepTitleListDemand : stepTitleListProject}
        step={step}
      />
      <StepInfo>
        <StepTitle>STEP {step}</StepTitle>
        <StepSubtitle>
          {isDemand
            ? stepTitleListDemand[step - 1]
            : stepTitleListProject[step - 1]}
        </StepSubtitle>
      </StepInfo>
    </Wrapper>
  );
};

export default StepHeader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;

  margin-left: 3rem;
  margin-right: 3rem;
  gap: 3rem;
  border-bottom: 1px solid #c1c1c1;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--black, #000);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const StepTitle = styled.div`
  color: var(--main, #002472);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const StepSubtitle = styled.div`
  color: var(--black, #000);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const StepInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
