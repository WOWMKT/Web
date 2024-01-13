import { useState } from 'react';
import CommonInput from '../common/CommonInput';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';
import CommonDropDown from '../common/CommonDropDown';
const UnivCert = () => {
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
      <InputBox>
        <Subtitle>대학명</Subtitle>
        <CommonDropDown
          options={accountOptions}
          onSelect={handleSelect}
          width="100%"
        />
      </InputBox>
      <InputBox>
        <Subtitle>학교이메일</Subtitle>
        <CommonInput size={'l'} placeholder="학교 이메일을 입력해주세요" />
        <CommonButton size={'l'} type="fillBlue" children={'인증번호 발생'} />
      </InputBox>
      <InputBox>
        <CommonInput size={'l'} placeholder="인증번호를 입력해주세요" />
        <CommonButton size={'l'} type="fillGray" children={'인증번호 확인'} />
      </InputBox>
      <CaptionBox>{'> 다음에 인증하기'}</CaptionBox>
    </Wrapper>
  );
};

export default UnivCert;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CaptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;

  color: var(--black, #000);
  /* Body 4 */
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
`;
const Subtitle = styled.div`
  color: var(--black, #000);

  /* Body 1 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
