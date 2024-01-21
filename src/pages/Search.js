import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import CommonDropDown from '../components/common/CommonDropDown';
import UnivToggle from '../components/common/UnivToggle';
import styled from 'styled-components';
import GoodsMainView from '../components/main/GoodsMainView';
import CloseIcon from '../components/common/CloseIcon';
import CategoryItem from '../components/main/CategoryItem';

const Search = () => {
  const categoryList = ['의류', '문구', '스티커', '인형', '뱃지', '기타'];
  return (
    <Wrapper>
      <TopBar>
        <CloseIcon />
        <SearchBar placeholder="검색어를 입력해주세요" />
      </TopBar>
      <Body>
        <Title>카테고리</Title>
        <CategoryList>
          {categoryList.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </CategoryList>
      </Body>
    </Wrapper>
  );
};

export default Search;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 3rem;

  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: 3rem;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-bottom: 3rem;
  border-bottom: 1px solid #c1c1c1;
`;

const SearchBar = styled.input`
  border-radius: 1.6rem;
  background: #f0f0f0;
  width: 28rem;

  margin-left: 2rem;

  &::placeholder {
    color: var(--sub2, #2969f3);

    /* Body 1 */
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.14px;
  }

  border: none;
  height: 3.5rem;

  padding-left: 1rem;
  padding-top: 0.5rem;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled.div`
  color: var(--black, #000);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const BarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Caption = styled.div`
  color: #646464;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const CaptionTag = styled.div`
  color: #646464;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  border-bottom: 2px solid #002472;
  margin-right: 1rem;
  padding-bottom: 1rem;
`;

const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 7rem;
  gap: 0.5rem;
`;

const ProductNum = styled.div`
  color: #646464;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
