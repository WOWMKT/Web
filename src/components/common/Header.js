import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerIcon from '../../assets/icon/HamburgerIcon';
import WowLogo from '../../assets/WowLogo';
import SearchIcon from '../../assets/icon/SearchIcon';
import HeartIcon from '../../assets/icon/HeartIcon';

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <IconBox>
          <HamburgerIcon />
        </IconBox>

        <CenteredLogo>
          <WowLogo />
        </CenteredLogo>

        <IconBox>
          <SearchIcon />
          <HeartIcon />
        </IconBox>
      </Wrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray2};
`;

const IconBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const CenteredLogo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export default Header;
