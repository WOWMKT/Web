import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '../../assets/icon/CloseIcon';

const CommonUse = ({ }) => {
    return (
      <Wrapper>
          <UseCheckWrapper>
              <UseCheckTitle>이용약관</UseCheckTitle>
              <CloseIcon />
          </UseCheckWrapper>
          <UseDetail>
            <UseComment>
            서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다. 서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.

            서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.

            서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.

            서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            내용내용내용 내용은 내용 내용이다.서비스 이용 약관의 내용은 다음과 같으며 이를 제공하였으니 잘 읽어보아야한다.
            </UseComment>
          </UseDetail>
    </Wrapper>
  );
};

export default CommonUse;

const Wrapper = styled.div`
width: 24.375rem;
height: 71.375rem;
background: #FFF;
`;

const UseComment = styled.div`
width: 20.3125rem;
height: 27.8125rem;
flex-shrink: 0;
color: #646464;
font-family: Pretendard;
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;

`;

const UseCheckTitle = styled.div`
color: var(--black, #000);

/* Heading */
font-family: Pretendard;
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.0125rem;
text-transform: capitalize;
`;
