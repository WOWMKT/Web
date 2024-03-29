import React from 'react';
import styled, { css } from 'styled-components';
import KakaoIcon from '../../assets/icon/KakaoIcon';

const CommonButton = ({ size, type, children, onClick, ...props }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <StyledButton size={size} type={type} onClick={handleClick} {...props}>
      {type === 'kakao' && <KakaoIcon />}
      {children}
    </StyledButton>
  );
};

export default CommonButton;

const StyledButton = styled.button`
  font-size: 1.4rem;
  font-style: normal;
  line-height: normal;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0 1.6rem;
  width: 100%;

  ${(props) =>
    props.size === 'l' &&
    css`
      height: 4.8rem;
      font-weight: 400;
    `}

  ${(props) =>
    props.size === 's' &&
    css`
      width: 15.7rem;
      height: 4.8rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.type === 'fillGray' &&
    css`
      background: #f0f0f0;
      color: #000;
    `}

  ${(props) =>
    props.type === 'fillBlue' &&
    css`
      background: #002472;
      color: #fff;
    `}

  ${(props) =>
    props.type === 'lineBlue' &&
    css`
      border: 1px solid var(--main, #002472);
      background: var(--white, #fff);
      color: var(--main, #002472);
    `}


    ${(props) =>
    props.type === 'kakao' &&
    css`
      background: var(--kakao, #fee500);
      color: #000;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      padding-left: 3rem;
      gap: 7rem;
    `}
`;
