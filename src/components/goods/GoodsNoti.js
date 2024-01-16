import React, { useEffect, useState } from 'react';
import CommonButton from '../common/CommonButton';
import NotiItem from './NotiItem';
import styled from 'styled-components';
import CommonInput from '../common/CommonInput';
import CommonTextarea from '../common/CommonTextarea';

const GoodsNoti = () => {
  const dummList = [
    { title: '배송시작 공지', seller: '판매자', date: '2023. 09. 18' },
    { title: '배송시작 공지', seller: '판매자', date: '2023. 09. 18' },
    ,
    { title: '배송시작 공지', seller: '판매자', date: '2023. 09. 18' },
  ];

  const [isInput, setIsInput] = useState(false);

  return (
    <>
      {isInput ? (
        <Wrapper>
          <CommonInput size="l" placeholder="제목을 입력해주세요" />
          <CommonTextarea size="l" placeholder="공지 내용을 입력해주세요" />
          <CommonButton type={'fillBlue'} children={'등록하기'} size={'l'} />
        </Wrapper>
      ) : (
        <Wrapper>
          <CommonButton
            type={'lineBlue'}
            children={'공지 작성하기'}
            size={'l'}
            width={'100%'}
            onClick={() => setIsInput(true)}
          />
          {dummList.map((noti, index) => (
            <NotiItem key={index} noti={noti} />
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default GoodsNoti;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem;
`;
