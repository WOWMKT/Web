import React, { useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';

const InputGetWayInfo = ({ handleMoveNext, handleMoveBefore }) => {
  return (
    <Wrapper>
      <GetWayWrapper>
        <Title>수령 방법*</Title>
        <SelectBox>
          <SelectBut>통신판매</SelectBut>
          <SelectBut>현장수령</SelectBut>
        </SelectBox>
        <DetailInputBox>
          <SubTitle>배송 방법 이름*(or 수령장소*)</SubTitle>
          <CommonInput width="100%" type="off" placeholder="ex. 우체국 택배" />
          <SubTitle>배송비*</SubTitle>
          <CommonInput width="40%" type="off" />
        </DetailInputBox>
        <CommonButton size={'l'} type={'fillGray'} children={'+'} />
      </GetWayWrapper>
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
        />{' '}
      </ButtonBox>
    </Wrapper>
  );
};

export default InputGetWayInfo;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  padding-bottom: 10rem;
`;
const GetWayWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 1.1rem;

  padding-top: 3.6rem;
  gap: 3.6rem;
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
const DetailInputBox = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-gray2, #bebebe);

  padding: 2rem;
  gap: 1rem;
`;
const SelectBut = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #c1c1c1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  color: #646464;

  /* Body 3 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;
