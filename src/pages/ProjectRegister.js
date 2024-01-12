import React, { useState } from 'react';
import styled from 'styled-components';
import StepHeader from '../components/register/StepHeader';
import InputAgreementInfo from '../components/register/InputAgreementInfo';
import InputExtraQuestionInfo from '../components/register/InputExtraQuestionInfo';
import InputGetWayInfo from '../components/register/InputGetWayInfo';
import InputGoodsInfo from '../components/register/InputGoodsInfo';
import InputSellerInfo from '../components/register/InputSellerInfo';
import CommonCheckBox from '../components/common/CommonCheckBox';

const ProjectRegister = () => {
  const [step, setStep] = useState(4); //1~5

  // 단계별 컴포넌트 배열
  const InputInfoList = [
    InputSellerInfo,
    InputGetWayInfo,
    InputGoodsInfo,
    InputExtraQuestionInfo,
    InputAgreementInfo,
  ];
  // step 값에 따른 컴포넌트 렌더링 함수
  const renderStepBodyComponent = () => {
    const StepBody = InputInfoList[step - 1];
    return StepBody ? <StepBody /> : null;
  };

  return (
    <Wrapper>
      <StepHeader step={3} />
      <StepBodyWrapper>{renderStepBodyComponent()}</StepBodyWrapper>
    </Wrapper>
  );
};

export default ProjectRegister;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 10rem;

  display: flex;
  flex-direction: column;
`;
const StepBodyWrapper = styled.div`
  height: 100%;
  margin-left: 3rem;
  margin-right: 3rem;
`;
