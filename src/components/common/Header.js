import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerIcon from '../../assets/icon/HamburgerIcon';
import WowLogo from '../../assets/WowLogo';
import SearchIcon from '../../assets/icon/SearchIcon';
import HeartIcon from '../../assets/icon/HeartIcon';
import { useModal } from './ModalContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { isModalOpen } = useModal();
  return (
    <HeaderWrapper isModalOpen={isModalOpen}>
      <Wrapper isModalOpen={isModalOpen}>
        <IconBox>
          <HamburgerIcon />
        </IconBox>

        <CenteredLogo
          onClick={() => {
            navigate('/');
          }}
        >
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
  background-color: ${(props) =>
    props.isModalOpen ? 'rgba(93, 93, 93, 0)' : 'white'};
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

const CenteredLogo = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export default Header;
