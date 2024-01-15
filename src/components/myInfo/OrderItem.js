import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const OrderItem = ({ order }) => {
  const [isDateShow, setIsDateShow] = useState(true);

  return (
    <Wrapper>
      {isDateShow && (
        <Date>
          {order.date}
          <DetailBut> {'상세보기 >'}</DetailBut>
        </Date>
      )}
      <State>{order.state}</State>
      <ProductBox>
        <BoxLeft></BoxLeft>
        <BoxRight>
          <Title>
            [{order.filter}] {order.title}
          </Title>
          <SubTitle>{order.subTitle}</SubTitle>
          <Title>{order.price}</Title>
        </BoxRight>
      </ProductBox>
    </Wrapper>
  );
};

export default OrderItem;
const Wrapper = styled.div`
  border-top: 1px solid #c1c1c1;
`;
const Date = styled.div`
  color: var(--black, #000);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 2rem;
  padding-bottom: 2rem;

  border-bottom: 1px solid #f0f0f0;
`;

const State = styled.div`
  color: var(--main, #002472);

  /* Sub Text */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;

  padding-top: 2rem;
`;

const Filter = styled.div`
  /* Styles for filter */
`;

const Title = styled.div`
  color: #646464;

  /* Sub Text */
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;
`;

const SubTitle = styled.div`
  color: #646464;

  /* Body 3 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;

const Price = styled.div`
  /* Styles for price */
`;
const DetailBut = styled.div`
  /* Styles for price */
`;
const BoxLeft = styled.div`
  width: 7.8rem;
  height: 7.8rem;
  border-radius: 1rem;
  background: #f0f0f0;
`;
const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: space-between;
`;
const ProductBox = styled.div`
  display: flex;
  flex-direction: row;

  gap: 3.5rem;

  padding-top: 2rem;
  padding-bottom: 2rem;
`;
