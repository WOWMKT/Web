import React from 'react';
import styled, { css } from 'styled-components';
import CheckIcon from '../../assets/icon/CheckIcon';

const StepStateBar = ({ step }) => {
  const stepTitleList = [
    '판매자정보',
    '수령 정보',
    '상품 정보',
    '추가 질문',
    '동의 확인 및 등록',
  ];

  return (
    <Wrapper>
      <StepTop>
        {stepTitleList.map((title, index) => (
          <StepTitle key={index}>STEP {index + 1}</StepTitle>
        ))}
      </StepTop>
      <StepBody>
        {stepTitleList.map((title, index) => (
          <StepLineWrapper key={index}>
            <StepLine />
            <StepCircle active={index + 1 <= step}>
              {index + 1 === step && <InnerCircle />}
              {index + 1 < step && (
                <InnerCheckCircle>
                  <CheckIcon />
                </InnerCheckCircle>
              )}
            </StepCircle>
          </StepLineWrapper>
        ))}
      </StepBody>
      <StepFooter>
        {stepTitleList.map((title, index) => (
          <StepSubtitle key={index}>{title}</StepSubtitle>
        ))}
      </StepFooter>
    </Wrapper>
  );
};

export default StepStateBar;

const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StepTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StepTitle = styled.div`
  width: 100%;
  color: var(--main, #002472);

  /* Caption 1 */
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.1px;

  display: flex;
  justify-content: center;
`;

const StepBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StepLineWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StepLine = styled.div`
  width: 100%;
  height: 0.15rem;
  background: #003cbc;
`;
const activeCircleStyles = css`
  top: -0.6rem;
  left: 35%;
  width: 1.5rem;
  height: 1.5rem;
`;

const StepCircle = styled.div`
  position: absolute;
  top: -0.17rem;
  left: 45%; /* 조정 가능한 값 */
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--main, #002472);
  z-index: 1;

  ${(props) => props.active && activeCircleStyles}
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background-color: #fff; /* 원하는 색상으로 변경 */
  z-index: 2;
`;

const InnerCheckCircle = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StepSubtitle = styled.div`
  width: 5rem;

  color: var(--sub1, #003cbc);

  /* Caption 1 */
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.1px;
`;
