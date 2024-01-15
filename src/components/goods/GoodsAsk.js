import React, { useEffect, useState } from 'react';
import CommonButton from '../common/CommonButton';
import NotiItem from './NotiItem';
import styled from 'styled-components';
import CommonInput from '../common/CommonInput';
import CommonTextarea from '../common/CommonTextarea';
import AskItem from './AskItem';
import CommonCheckBox from '../common/CommonCheckBox';

const GoodsAsk = () => {
  const dummList = [
    {
      title: '배송시작 공지',
      writer: '판매자',
      date: '2023. 09. 18',
      isSecret: true,
      state: '답변대기',
    },
    {
      title: '배송시작 공지',
      writer: '판매자',
      date: '2023. 09. 18',
      isSecret: false,
      state: '답변대기',
    },
  ];

  const [isInput, setIsInput] = useState(false);

  return (
    <>
      {isInput ? (
        <Wrapper>
          <CommonInput size="l" placeholder="제목을 입력해주세요" />
          <CommonTextarea size="l" placeholder="공지 내용을 입력해주세요" />
          <CommonButton type={'fillBlue'} children={'등록하기'} size={'l'} />
          <Footer>
            <CommonCheckBox />
            <Caption>비밀글로 문의하기</Caption>
          </Footer>
        </Wrapper>
      ) : (
        <Wrapper>
          <CommonButton
            type={'lineBlue'}
            children={'상품 문의하기'}
            size={'l'}
            width={'100%'}
            onClick={() => setIsInput(true)}
          />
          {dummList.map((ask, index) => (
            <AskItem key={index} ask={ask} />
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default GoodsAsk;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  align-items: center;
`;
const Caption = styled.div`
  color: var(--gray-gray1, #646464);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
