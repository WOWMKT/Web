import React, { useEffect } from 'react';
import styled from 'styled-components';
import BackTopBar from '../common/BackTopBar';
import OrderItem from './OrderItem';

const MyOrder = () => {
  const dummList = [
    {
      date: '2023.10.14',
      state: '확인 중',
      filter: '판매',
      title: '00대학교',
      subTitle: '와움이 인형 프로젝트',
      price: '25,000',
    },
    {
      date: '2023.10.10',
      state: '배송대기중',
      filter: '판매',
      title: '00대학교',
      subTitle: '와움이 인형 프로젝트',
      price: '35,000',
    },
    {
      date: '2023.10.8',
      state: '배송대기중',
      filter: '판매',
      title: '00대학교',
      subTitle: '와움이 인형 프로젝트',
      price: '35,000',
    },
  ];

  return (
    <Wrapper>
      <BackTopBar children={'나의 주문'} />
      <OrderBody>
        <FilterBar>
          <FilterTag>전체</FilterTag>
          <FilterTag>판매</FilterTag>
          <FilterTag>수요조사</FilterTag>
        </FilterBar>
        <OrderList>
          {dummList.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))}
        </OrderList>
      </OrderBody>
    </Wrapper>
  );
};

export default MyOrder;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderBody = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;
const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  padding-top: 3rem;
  padding-bottom: 3rem;
`;
const FilterTag = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #646464;
  color: #646464;

  /* Body 3 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const OrderList = styled.div``;
