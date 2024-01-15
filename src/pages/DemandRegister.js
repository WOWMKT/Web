import React, { useState } from 'react';
import styled from 'styled-components';
import StepHeader from '../components/register/StepHeader';
import InputAgreementInfo from '../components/register/InputAgreementInfo';
import InputExtraQuestionInfo from '../components/register/InputExtraQuestionInfo';
import InputGetWayInfo from '../components/register/InputGetWayInfo';
import InputGoodsInfo from '../components/register/InputGoodsInfo';
import InputSellerInfo from '../components/register/InputSellerInfo';
import CommonCheckBox from '../components/common/CommonCheckBox';

const DemandRegister = () => {
  const [step, setStep] = useState(1); //1~4
  const handleMoveNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      alert('마지막 페이지!');
    }
  };

  const handleMoveBefore = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // 단계별 컴포넌트 배열
  const InputInfoList = [
    InputSellerInfo,
    InputGoodsInfo,
    InputExtraQuestionInfo,
    InputAgreementInfo,
  ];
  // step 값에 따른 컴포넌트 렌더링 함수
  const renderStepBodyComponent = () => {
    const StepBody = InputInfoList[step - 1];
    return StepBody ? (
      <StepBody
        handleMoveNext={handleMoveNext}
        handleMoveBefore={handleMoveBefore}
        isInput={true}
      />
    ) : null;
  };

  return (
    <Wrapper>
      <StepHeader step={step} isDemand={true} />
      <StepBodyWrapper>{renderStepBodyComponent()}</StepBodyWrapper>
    </Wrapper>
  );
};

export default DemandRegister;

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 10rem;
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;
`;
const StepBodyWrapper = styled.div`
  height: 100%;
  margin-left: 3rem;
  margin-right: 3rem;
`;
