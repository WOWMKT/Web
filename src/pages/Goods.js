import { useState } from 'react';
import GoodsAsk from '../components/goods/GoodsAsk';
import GoodsDetail from '../components/goods/GoodsDetail';
import GoodsNoti from '../components/goods/GoodsNoti';
import styled from 'styled-components';

const Goods = () => {
  const [pageType, setpageType] = useState(2); //0~2

  //컴포넌트 배열
  const GoodsBodyList = [GoodsDetail, GoodsNoti, GoodsAsk];
  // pageType 값에 따른 컴포넌트 렌더링 함수
  const renderGoodsBodyComponent = () => {
    const GoodsBody = GoodsBodyList[pageType];
    return GoodsBody ? <GoodsBody /> : null;
  };

  return (
    <Wrapper>
      <Header>
        <SubTitle>상품 설명</SubTitle>
        <SubTitle>공지</SubTitle>
        <SubTitle>문의</SubTitle>
      </Header>
      <GoodsBodyWrapper>{renderGoodsBodyComponent()}</GoodsBodyWrapper>
    </Wrapper>
  );
};

export default Goods;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10rem;
  padding-bottom: 10rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  padding-top: 2rem;

  border-bottom: 1px solid #75a1ff;
`;
const SubTitle = styled.button`
  color: var(--main, #002472);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const GoodsBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
