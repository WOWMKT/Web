import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import CommonDropDown from '../components/common/CommonDropDown';
import UnivToggle from '../components/common/UnivToggle';
import styled from 'styled-components';
import GoodsMainView from '../components/main/GoodsMainView';

const Main = () => {
  const categoryOptions = [
    { value: '인형', label: '인형' },
    { value: '기타', label: '기타' },
    { value: '등등', label: '등등' },
  ];
  const filterOptions = [
    { value: '인기순', label: '인기순' },
    { value: '마감순', label: '마감순' },
    { value: '절박순', label: '절박순' },
  ];
  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  const [isAllSchools, setIsAllSchools] = useState(false);

  const customDropDownStyle = {
    width: '8rem',
    height: '3rem',
    borderRadius: '3rem',
    border: '1px solid var(--sub3, #75A1FF)',
    color: '#646464',
    fontSize: '1rem',
    padding: '0.7rem',
  };

  const [goodsList, setGoodsList] = useState([
    {
      imgLink: 'urlurl',
      seller: '제작자',
      univ: '굿즈대학교',
      performance: '30%',
    },
    {
      imgLink: 'urlurl',
      seller: '제작자',
      univ: '굿즈대학교',
      performance: '30%',
    },
    ,
    {
      imgLink: 'urlurl',
      seller: '제작자',
      univ: '굿즈대학교',
      performance: '30%',
    },
    ,
    {
      imgLink: 'urlurl',
      seller: '제작자',
      univ: '굿즈대학교',
      performance: '30%',
    },
    ,
    {
      imgLink: 'urlurl',
      seller: '제작자',
      univ: '굿즈대학교',
      performance: '30%',
    },
  ]);

  const handleSchoolToggle = (isSelected) => {
    setIsAllSchools(isSelected);
  };

  return (
    <Wrapper>
      <TopBar>
        <BarLeft>
          <CaptionTag>판매</CaptionTag>
          <CaptionTag>수요조사</CaptionTag>
        </BarLeft>
        <BarRight>
          <Caption>+ 등록하기</Caption>
        </BarRight>
      </TopBar>
      <FilterBar>
        <ProductNum>총 n개</ProductNum>
        <CommonDropDown
          options={categoryOptions}
          onSelect={handleSelect}
          style={customDropDownStyle}
        />
        <CommonDropDown
          options={filterOptions}
          onSelect={handleSelect}
          style={customDropDownStyle}
        />
        <UnivToggle isAllSchools={isAllSchools} onSelect={handleSchoolToggle} />
      </FilterBar>
      <Body>
        {goodsList.map((good, index) => (
          <GoodsMainView
            key={index} // It's important to include a unique key for each item in the list
            imgLink={good.imgLink}
            seller={good.seller}
            univ={good.univ}
            performance={good.performance}
          />
        ))}
      </Body>
    </Wrapper>
  );
};

export default Main;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 13rem;
  padding-bottom: 5rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
