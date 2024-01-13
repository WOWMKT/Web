import React from 'react';

const theme = {

  colors: {
    main: '#002472',
    sub1: '#003CBC',
    sub2: '#2969F3',
    sub3: '#75A1FF',
    gray1: '#646464',
    gray2: '#BEBEBE',
    gray3: '#C1C1C1',
    gray4: '#DDDDDD',
    gray5: '#F0F0F0',
    black: '#000000',
    white: '#FFFFFF',
  },
  fonts: {
    heading: `
    color: #000;
    font-family: "Pretendard-Regular";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;`,
    subText: `
    color: #646464;
    font-family: "Pretendard-Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;`,
    body1: `
    color: #000;
    font-family: "Pretendard-Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;`,
    body2: `
    color: #000;
    font-family: "Pretendard-Regular";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;`,
    caption1: `
    color: #BEBEBE;
    font-family: "Pretendard-Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;`,
    caption2: `
    color: #000;
    font-family: "Pretendard-Regular";
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
