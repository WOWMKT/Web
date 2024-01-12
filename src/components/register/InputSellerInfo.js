import React, { useState } from 'react';
import styled from 'styled-components';
import CommonInput from '../common/CommonInput';
import CommonCheckBox from '../common/CommonCheckBox';
import CommonDropDown from '../common/CommonDropDown';
import CommonButton from '../common/CommonButton';

const InputSellerInfo = () => {
  const accountOptions = [
    { value: '우리은행', label: '우리은행' },
    { value: '신한은행', label: '신한은행' },
    { value: '국민은행', label: '국민은행' },
  ];
  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <Wrapper>
      <InputSellerName>
        <SubTitle>판매자 이름*</SubTitle>
        <CommonInput
          width="100%"
          type="off"
          placeholder="판매자 명을 입력해주세요"
        />
      </InputSellerName>

      <InputSellerConnect>
        <SubTitle>판매자 연락수단*</SubTitle>
        <ConnectBox>
          <CommonCheckBox />
          <CheckBoxTitle>전화번호 남겨두기</CheckBoxTitle>
          <CommonInput
            width="19rem"
            type="off"
            placeholder="숫자만 입력하세요"
          />
        </ConnectBox>
        <ConnectBox>
          <CommonCheckBox />
          <CheckBoxTitle>이메일 남겨두기</CheckBoxTitle>
          <CommonInput
            width="19rem"
            type="off"
            placeholder="이메일을 입력하세요"
          />
        </ConnectBox>
        <ConnectBox>
          <CommonCheckBox />
          <CheckBoxTitle>
            기타<Caption>(ex.인스타그램)</Caption>
          </CheckBoxTitle>
          <CommonInput width="19rem" type="off" />
        </ConnectBox>
      </InputSellerConnect>

      <InputSellerAccount>
        <Title>판매자 계좌*</Title>
        <AccountBox>
          <SubTitle>은행명*</SubTitle>
          <CommonDropDown options={accountOptions} onSelect={handleSelect} />
          <SubTitle>계좌번호*</SubTitle>
          <CommonInput width="100%" type="off" />
          <SubTitle>예금주*</SubTitle>
          <CommonInput width="100%" type="off" />
        </AccountBox>
        <CommonButton size={'l'} type={'fillGray'} children={'+'} />
      </InputSellerAccount>
      <CommonButton size={'l'} type={'fillBlue'} children={'다음 단계'} />
    </Wrapper>
  );
};

export default InputSellerInfo;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  padding-bottom: 10rem;
`;
const InputSellerName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;
const SubTitle = styled.div`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 1rem;
  margin-top: 1.6rem;
`;
const InputSellerConnect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;
const Caption = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--gray-gray1, #646464);
`;
const ConnectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.6rem;
`;
const CheckBoxTitle = styled.div`
  width: 8.6rem;
  color: var(--gray-gray1, #646464);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const InputSellerAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.6rem;
`;
const Title = styled.div`
  color: var(--main, #002472);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const AccountBox = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;
