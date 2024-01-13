import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../components/user/Login';
import KakaoCallback from '../components/user/KakaoCallback';
import ResetPw from '../components/user/ResetPw';
import SignupEmail from '../components/user/SignupEmail';
import UnivCert from '../components/user/UnivCert';

const User = () => {
  const { page_type } = useParams();
  console.log(`${page_type}렌더링`);

  const titleList = [
    '이메일로 로그인',
    '이메일로 가입하기',
    '비밀번호 재설정',
    '학교인증',
    '',
  ];

  const bodyMapping = {
    login: Login,
    signup: SignupEmail,
    resetPw: ResetPw,
    univCert: UnivCert,
    kakaoCallback: KakaoCallback,
  };

  const title = titleList[Object.keys(bodyMapping).indexOf(page_type)];

  const UserBody = bodyMapping[page_type];

  return (
    <Wrapper>
      <Title>{title}</Title>
      {UserBody && <UserBody />}
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 10rem;

  display: flex;
  flex-direction: column;

  padding-left: 3rem;
  padding-right: 3rem;

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
