import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import CommonDropDown from '../components/common/CommonDropDown';
import UnivToggle from '../components/common/UnivToggle';
import styled from 'styled-components';
import GoodsMainView from '../components/main/GoodsMainView';
import { useGetSaleItems } from '../apis/get/main/useGetSaleItems';
import GoodsList from '../components/main/GoodsList';

const Main = () => {
  const categoryOptions = [
    { value: '인형', label: '인형' },
    { value: '기타', label: '기타' },
    { value: '등등', label: '등등' },
  ];
  const filterOptions = [
    { value: 'view', label: '인기순' },
    { value: 'endDate', label: '마감순' },
    { value: 'startDate', label: '최신순' },
  ];

  //state
  const [isAllSchools, setIsAllSchools] = useState(false);

  const [isSelling, setIsSelling] = useState(true); //project, demand
  const [categoryId, setCategoryId] = useState(1); // 1~5
  const [orderBy, setOrderBy] = useState('view'); // endDate, view, startDate

  //const [searchTerm, setSearchTerm] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const [univ, setUniv] = useState('allUniv'); // myUniv, allUniv
  //const [isLast, setIsLast] = useState(false);

  const customDropDownStyle = {
    width: '8rem',
    height: '2.5rem',
    borderRadius: '3rem',
    border: '1px solid var(--sub3, #75A1FF)',
    color: '#646464',
    fontSize: '1rem',
    padding: '0.2rem',
  };

  const handleSchoolToggle = (isSelected) => {
    setIsAllSchools(isSelected);
  };
  const handleSellButtonClick = () => {
    setIsSelling(true);
  };
  const handleSurveyButtonClick = () => {
    setIsSelling(false);
  };

  const handleSelectOrderBy = (selectedOption) => {
    setOrderBy(selectedOption.value);
  };

  const handleSelectCategory = (selectedOption) => {
    setCategoryId(
      categoryOptions.findIndex(
        (option) => option.value === selectedOption.value
      ) + 1
    );
  };

  useEffect(() => {
    if (isAllSchools) {
      setUniv('allUniv');
    } else {
      setUniv('myUniv');
    }
  }, [isAllSchools]);

  return (
    <Wrapper>
      <TopBar>
        <BarLeft>
          <CaptionTag onClick={handleSellButtonClick} active={isSelling}>
            판매
          </CaptionTag>
          <CaptionTag onClick={handleSurveyButtonClick} active={!isSelling}>
            수요조사
          </CaptionTag>
        </BarLeft>
        <BarRight>
          <Caption>+ 등록하기</Caption>
        </BarRight>
      </TopBar>
      <FilterBar>
        <ProductNum>총 3개</ProductNum>
        <CommonDropDown
          options={categoryOptions}
          onSelect={handleSelectCategory}
          style={customDropDownStyle}
        />
        <CommonDropDown
          options={filterOptions}
          onSelect={handleSelectOrderBy}
          style={customDropDownStyle}
        />
        <UnivToggle isAllSchools={isAllSchools} onSelect={handleSchoolToggle} />
      </FilterBar>
      <GoodsList
        pageNo={pageNo}
        orderBy={orderBy}
        univ={univ}
        isSelling={isSelling}
      />
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

const CaptionTag = styled.button`
  color: #646464;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  border-bottom: ${(props) => (props.active ? '2px solid #002472' : 'none')};
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
