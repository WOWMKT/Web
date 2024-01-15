import React, { useEffect } from 'react';
import CommonButton from '../common/CommonButton';
import NotiItem from './NotiItem';
import styled from 'styled-components';

const GoodsNoti = () => {
  const dummList = [
    { title: '배송시작 공지', seller: '판매자', date: '2023. 09. 18' },
    { title: '배송시작 공지', seller: '판매자', date: '2023. 09. 18' },
    ,
    { title: '배송시작 공지', seller: '판매자', date: '2023. 09. 18' },
  ];

  return (
    <Wrapper>
      <CommonButton
        type={'lineBlue'}
        children={'공지 작성하기'}
        size={'l'}
        width={'100%'}
      />
      {dummList.map((noti, index) => (
        <NotiItem key={index} noti={noti} />
      ))}
    </Wrapper>
  );
};

export default GoodsNoti;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem;
`;
