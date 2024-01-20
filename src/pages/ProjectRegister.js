import React, { useState, Component } from 'react';
import styled from 'styled-components';
import StepHeader from '../components/register/StepHeader';
import InputAgreementInfo from '../components/register/InputAgreementInfo';
import InputExtraQuestionInfo from '../components/register/InputExtraQuestionInfo';
import InputGetWayInfo from '../components/register/InputGetWayInfo';
import InputGoodsInfo from '../components/register/InputGoodsInfo';
import InputSellerInfo from '../components/register/InputSellerInfo';
import CommonCheckBox from '../components/common/CommonCheckBox';
import { usePostProjectRegister } from '../apis/post/register/usePostProjectRegister';

const ProjectRegister = () => {
  //입력데이터 처리
  const [formData, setFormData] = useState({
    //InputSellerInfo
    sellerName: '',
    nickname: '',
    phoneNumber: '',
    sellerEtc: '',
    bank: '',
    account: '',
    accountHolderName: '',

    //InputGetWayInfo
    receiveType: '',
    receiveAddress: '',
    deliveryType: '',
    deliveryFee: 0,

    //InputGoodsInfo
    projectName: '',
    thumbnail: '',
    category_id: 1,
    startDate: '',
    endDate: '',
    description: '',
    image1: 's3.image.thumbnail',
    item: [],

    //InputExtraQuestions
    questions: [],

    sellToAll: true,
  });

  // Input change handler
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //custom-hook
  const fetchData = usePostProjectRegister();

  const handleSubmit = () => {
    fetchData.projectRegister(formData);
  };

  //render step
  const [step, setStep] = useState(1); //1~5
  const handleMoveNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      handleSubmit();
      alert('마지막 페이지!');
    }
  };

  const handleMoveBefore = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const InputInfoList = [
    InputSellerInfo,
    InputGetWayInfo,
    InputGoodsInfo,
    InputExtraQuestionInfo,
    InputAgreementInfo,
  ];

  const renderStepBodyComponent = () => {
    const StepBody = InputInfoList[step - 1];
    return StepBody ? (
      <StepBody
        handleMoveNext={handleMoveNext}
        handleMoveBefore={handleMoveBefore}
        isInput={true}
        handleInputChange={handleInputChange}
      />
    ) : null;
  };

  return (
    <Wrapper>
      <StepHeader step={step} />
      <StepBodyWrapper>{renderStepBodyComponent()}</StepBodyWrapper>
    </Wrapper>
  );
};

export default ProjectRegister;

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
