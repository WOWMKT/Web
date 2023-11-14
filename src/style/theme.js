import React from 'react';

const theme = {

  colors: {
    /* 1이 제일 진한 색. b-파란색, x-초록색, g-회색*/
    b1: '#002472',
    b2: '#003CBC',
    b3: '#2969F3',
    b4: '#75A1FF',
    x1: '#19592F',
    x2: '#17993C',
    x3: '#3BA54E',
    x4: '#76C184',
    g1: '#393939',
    g2: '#5B5B5B',
    g3: '#7D7D7D',
    g4: '#979797',
    g5: '#ADADAD',
    g6: '#D0D0D0',
    black: '#000000',
    white: '#FFFFFF',
  },
  fonts: {
    heading: `color: #000;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;`,
    subText: `color: #646464;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;`,
    body1: `color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;`,
    body2: `color: #000;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;`,
    caption1: `color: #BEBEBE;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;`,
    caption2: `color: #000;
    font-family: Pretendard;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 300;`,
  },
  media: {
    // 작은 스마트폰
    smallMobile: `
      @media screen and (max-width: 320px) {
        font-size: 12px;
      }
    `,
    // 일반 스마트폰
    mobile: `
      @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 14px;
      }
    `,
    // 큰 스마트폰
    largeMobile: `
      @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 16px;
      }
    `,
    // 접이식 스마트폰 (예: Z플립, 갤럭시 폴드)
    foldableMobile: `
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        font-size: 18px;
      }
    `
  }
};
export default theme;
