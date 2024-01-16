import React, { useEffect } from 'react';
import OrderDetail from '../myInfo/OrderDetail';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';

const OrderForm = () => {
  return (
    <Wrapper>
      <OrderDetail isOrderForm={true} />
      <CommonButton type={'fillBlue'} children={'구매하기'} size={'l'} />
    </Wrapper>
  );
};

export default OrderForm;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-bottom: 3rem;
`;
