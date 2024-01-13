import React, { useState } from 'react';
import styled from 'styled-components';
import CommonCheckBox from '../common/CommonCheckBox';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';

const InputExtraQuestionInfo = ({ handleMoveNext, handleMoveBefore }) => {
  return (
    <Wrapper>
      <FormTitleBox>
        <Title>추가 질문 등록(선택)</Title>
        <DetailInputBox>
          <CommonInput
            width="100%"
            type="off"
            placeholder="질문을 입력해주세요"
          />
          <DetailInputBoxFooter>
            <CommonCheckBox />
            <CheckBoxTitle>응답 필수</CheckBoxTitle>
          </DetailInputBoxFooter>
        </DetailInputBox>
        <CommonButton size={'l'} type={'fillGray'} children={'+'} />
      </FormTitleBox>
      <ButtonBox>
        <CommonButton
          size={'s'}
          type={'lineBlue'}
          children={'이전 단계'}
          onClick={handleMoveBefore}
        />
        <CommonButton
          size={'s'}
          type={'fillBlue'}
          children={'다음 단계'}
          onClick={handleMoveNext}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default InputExtraQuestionInfo;

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
const Title = styled.div`
  color: var(--main, #002472);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  display: flex;
  justify-content: center;
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
const DetailInputBoxFooter = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
const DetailInputBox = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding: 2rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
