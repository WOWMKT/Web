import React from "react";
import styled from 'styled-components';
import theme from "./theme";

export const ThemeProvider = styled.div`
  font-size: 20px; // 기본 글자 크기
  ${theme.media.smallMobile} {
    font-size: 12px;
  }
  ${theme.media.mobile} {
    font-size: 14px;
  }
  ${theme.media.largeMobile} {
    font-size: 16px;
  }
  ${theme.media.foldableMobile} {
    font-size: 18px;
  }
`;
export default ThemeProvider;