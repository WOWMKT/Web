import React, { useState } from 'react';
import styled from 'styled-components';
import CommonCheckBox from '../common/CommonCheckBox';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';

const InputAgreementInfo = () => {
  return (
    <Wrapper>
      <FormTitleBox>
        <AgreementBox>
          <CheckBoxWrapper>
            <CommonCheckBox />
            <CheckBoxTitle>개인정보 수집 및 이용 동의(필수) </CheckBoxTitle>
          </CheckBoxWrapper>
          <AgreementComment>
            서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘
            읽어보아야 한다. 내용내용내용 내용은 내용 내용이다. 서비스 이용
            약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아...서비스
            이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야
            한다. 내용내용내용 내용은 내용 내용이다. 서비스 이용 약관의 내용은
            다음과 같으며 이를 제공하였으니 잘 읽어보아...서비스 이용 약관의
            내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야 한다.
            내용내용내용 내용은 내용 내용이다. 서비스 이용 약관의 내용은 다음과
            같으며 이를 제공하였으니 잘 읽어보아...서비스 이용 약관의 내용은
            다음과 같으며 이를 제공하였으니 잘 읽어보아야 한다. 내용내용내용
            내용은 내용 내용이다. 서비스 이용 약관의 내용은 다음과 같으며 이를
            제공하였으니 잘 읽어보아...
          </AgreementComment>
        </AgreementBox>
        <AgreementBox>
          <CheckBoxWrapper>
            <CommonCheckBox />
            <CheckBoxTitle>판매자 유의사항 동의(필수) </CheckBoxTitle>
          </CheckBoxWrapper>
          <AgreementComment>
            서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘
            읽어보아야 한다. 내용내용내용 내용은 내용 내용이다. 서비스 이용
            약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아...서비스
            이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야
            한다. 내용내용내용 내용은 내용 내용이다. 서비스 이용 약관의 내용은
            다음과 같으며 이를 제공하였으니 잘 읽어보아...서비스 이용 약관의
            내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야 한다.
            내용내용내용 내용은 내용 내용이다. 서비스 이용 약관의 내용은 다음과
            같으며 이를 제공하였으니 잘 읽어보아...서비스 이용 약관의 내용은
            다음과 같으며 이를 제공하였으니 잘 읽어보아야 한다. 내용내용내용
            내용은 내용 내용이다. 서비스 이용 약관의 내용은 다음과 같으며 이를
            제공하였으니 잘 읽어보아...
          </AgreementComment>
        </AgreementBox>
      </FormTitleBox>
      <ButtonBox>
        <CommonButton size={'s'} type={'lineBlue'} children={'이전 단계'} />
        <CommonButton size={'s'} type={'fillBlue'} children={'다음 단계'} />
      </ButtonBox>
    </Wrapper>
  );
};

export default InputAgreementInfo;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  padding-bottom: 10rem;
  padding-top: 3.6rem;
`;

const FormTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const AgreementBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;
const CheckBoxTitle = styled.div`
  color: var(--gray-gray1, #646464);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CheckBoxWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
const AgreementComment = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding: 2rem;
  height: 7rem;
  overflow-y: auto; /* 스크롤바가 표시되도록 설정 */

  color: #646464;

  /* Caption 1 */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.1px;
`;
