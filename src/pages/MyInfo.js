import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';
import MyOrder from '../components/myInfo/MyOrder';
import MyRegister from '../components/myInfo/MyRegister';
import OrderDetail from '../components/myInfo/OrderDetail';
import RegisterDetail from '../components/myInfo/RegisterDetail';
import FormManage from '../components/myInfo/FormManage';
import UserInfo from '../components/myInfo/UserInfo';

const MyInfo = () => {
  const { page_type } = useParams();

  const bodyMapping = {
    myOrder: MyOrder,
    orderDetail: OrderDetail,
    myRegister: MyRegister,
    registerDetail: RegisterDetail,
    formManage: FormManage,
  };

  const MyInfoBody = bodyMapping[page_type];

  return (
    <Wrapper>
      {page_type ? (
        MyInfoBody ? (
          <MyInfoBody />
        ) : (
          <h1>Component not found for {page_type}</h1>
        )
      ) : (
        <UserInfo />
      )}
    </Wrapper>
  );
};

export default MyInfo;

const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--black, #000);

  /* Heading */
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  text-transform: capitalize;

  padding-top: 3rem;
  padding-bottom: 3rem;
`;
