import React, { useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import CommonDropDown from '../common/CommonDropDown';
import CommonCalender from '../common/CommonCalendar';
import CommonCheckBox from '../common/CommonCheckBox';
import CommonTextarea from '../common/CommonTextarea';

const InputGoodsInfo = ({ handleMoveNext, handleMoveBefore }) => {
  const categoryOptions = [
    { value: '우리은행', label: '우리은행' },
    { value: '신한은행', label: '신한은행' },
    { value: '국민은행', label: '국민은행' },
  ];
  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <Wrapper>
      <GoodsInfoWrapper>
        <FormTitleBox>
          <Title>폼 제목*</Title>
          <CommonInput width="100%" />
          <Caption>0/50</Caption>
        </FormTitleBox>

        <LeftAlignBox>
          <LeftTitle>
            대표이미지*<Caption>.jpg, .png, .svg파일만 가능합니다</Caption>
          </LeftTitle>

          <ImgUploader type="file" />
        </LeftAlignBox>

        <LeftAlignBox>
          <LeftTitle>카테고리*</LeftTitle>
          <CommonDropDown options={categoryOptions} onSelect={handleSelect} />
        </LeftAlignBox>

        <LeftAlignBox>
          <LeftTitle>판매 시작일*</LeftTitle>
          <CommonCalender />
        </LeftAlignBox>

        <LeftAlignBox>
          <LeftTitle>판매 종료일*</LeftTitle>
          <CommonCalender />
        </LeftAlignBox>

        <FormTitleBox>
          <Title>상품 설명*</Title>
          <CommonTextarea />
        </FormTitleBox>

        <FormTitleBox>
          <Title>상품 등록*</Title>
          <DetailInputBox>
            <SubTitle>상품 이름*</SubTitle>
            <CommonInput width="100%" type="off" />
            <SubTitle>가격*</SubTitle>
            <CommonInput width="40%" type="off" />
            <SubTitle>재고*</SubTitle>
            <CommonInput width="40%" type="off" />
            <ConnectBox>
              <CommonCheckBox />
              <CheckBoxTitle>구매개수 제한</CheckBoxTitle>
              <CommonInput width="40%" type="off" />
            </ConnectBox>
          </DetailInputBox>
        </FormTitleBox>
      </GoodsInfoWrapper>
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

export default InputGoodsInfo;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  padding-bottom: 10rem;
`;
const GoodsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 1.1rem;

  padding-top: 3.6rem;
  gap: 3.6rem;
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
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImgUploader = styled.input``;

const SubTitle = styled.div`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 1rem;
  margin-top: 1.6rem;
`;

const DetailInputBox = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;

const ConnectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.6rem;

  margin-top: 1.6rem;
`;
const CheckBoxTitle = styled.div`
  width: 8.6rem;
  color: var(--gray-gray1, #646464);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FormTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;

  color: #bebebe;

  /* Body 4 */
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
`;

const LeftAlignBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;
`;

const LeftTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  color: var(--main, #002472);

  /* Sub Text */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
`;
