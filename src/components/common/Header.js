import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerIcon from '../../assets/icon/HamburgerIcon';
import WowLogo from '../../assets/WowLogo';
import SearchIcon from '../../assets/icon/SearchIcon';
import HeartIcon from '../../assets/icon/HeartIcon';

const Header = () => {
  return (
    <Wrapper>
      <IconBox>
        <HamburgerIcon />
      </IconBox>

      <WowLogo />
      <IconBox>
        <SearchIcon />
      </IconBox>
      <IconBox>
        <HeartIcon />
      </IconBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray2};
`;
const IconBox = styled.div``;

export default Header;
