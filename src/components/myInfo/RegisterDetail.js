import React, { useEffect } from 'react';
import BackTopBar from '../common/BackTopBar';
import styled from 'styled-components';
import OrderItem from './OrderItem';
import InputSellerInfo from '../register/InputSellerInfo';
import InputGetWayInfo from '../register/InputGetWayInfo';
import InputGoodsInfo from '../register/InputGoodsInfo';
import CommonButton from '../common/CommonButton';

const RegisterDetail = () => {
  const dummyData = {
    date: '2023.10.14',
    state: '확인 중',
    filter: '판매',
    title: '00대학교',
    subTitle: '와움이 인형 프로젝트',
    price: '25,000',
  };
  return (
    <Wrapper>
      <BackTopBar children={'등록상세'} />
      <RegisterBody>
        <OrderHeader>
          <ColumnBox>
            <CaptionGray>no.123124124</CaptionGray>
            <CaptionBlack>2023.01.19</CaptionBlack>
          </ColumnBox>
          <SmallBut>수정하기</SmallBut>
        </OrderHeader>
        <OrderItem order={dummyData} isDateShow={false} />

        {/* 등록 정보 */}
        <GrayBar />
        <InputSellerInfo />
        <InputGetWayInfo />
        <InputGoodsInfo />

        <CommonButton size={'l'} type={'fillBlue'} children={'저장하기'} />
      </RegisterBody>
    </Wrapper>
  );
};

export default RegisterDetail;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const GrayBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c1c1c1;
`;

const RegisterBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem;
  gap: 3rem;
`;
const OrderHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CaptionGray = styled.div`
  color: #646464;

  /* Body 3 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;
const CaptionBlack = styled.div`
  color: var(--black, #000);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SmallBut = styled.div`
  border-radius: 10px;
  background: #f0f0f0;
  color: #646464;

  /* Body 2 */
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;

  padding: 1rem;
`;
