import React, { useEffect, useState } from 'react';
import OrderDetail from '../myInfo/OrderDetail';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';
import QuantityInput from '../common/QuantityInput';

const DemandForm = () => {
  const [quantity, setQuantity] = useState(1);

  const handleClickCounter = (num) => {
    setQuantity((prev) => prev + num);
  };
  return (
    <Wrapper>
      <GrayFillBox>
        정확한 수요 예측을 위해, 실제 구매를 원하는 분만 참여해주세요!
      </GrayFillBox>

      <ColumnBox>
        <SubTitle>상품 선택</SubTitle>
        <ColumnBox>
          <SelectStack>
            <StackTitle>1. 상품명2</StackTitle>
            <StackBody>
              1,000원
              <QuantityInput quantity={quantity} onClick={handleClickCounter} />
            </StackBody>
          </SelectStack>
          <SelectStack>
            <StackTitle>2. 상품명3</StackTitle>
            <StackBody>
              10,000원
              <QuantityInput quantity={quantity} onClick={handleClickCounter} />
            </StackBody>
          </SelectStack>
          <SelectStack>
            <StackTitle>3. 상품명3</StackTitle>
            <StackBody>
              10,000원
              <QuantityInput quantity={quantity} onClick={handleClickCounter} />
            </StackBody>
          </SelectStack>
        </ColumnBox>
      </ColumnBox>

      <ColumnBox>
        <SubTitle>참여 정보</SubTitle>
        <PriceInfoBox>
          <InfoStack>
            <StackTitle>상품명2</StackTitle>
            <StackBody>1개 1,000원</StackBody>
          </InfoStack>
          <InfoStack>
            <StackTitle>상품명3</StackTitle>
            <StackBody>10개 10,000원</StackBody>
          </InfoStack>
        </PriceInfoBox>
      </ColumnBox>
      <TotalPriceInfo>
        <RowBox>
          <StackBody>총 상품 수량</StackBody>
          <StackBodyBlack>{quantity}개</StackBodyBlack>
        </RowBox>
      </TotalPriceInfo>

      <CommonButton type={'fillBlue'} children={'참여하기'} size={'l'} />
    </Wrapper>
  );
};

export default DemandForm;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding-bottom: 3rem;
`;

const GrayFillBox = styled.div`
  background: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  margin-top: 3rem;

  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const SelectStack = styled.div`
  border: 1px solid var(--gray-gray3, #c1c1c1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
`;

//OrderDetail css

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnBoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 1px solid #646464;
  padding-top: 3rem;
  gap: 3rem;
`;

const ColumnBoxMargin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OrderHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SubTitle = styled.div`
  color: var(--main, #002472);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const PriceInfoBox = styled.div`
  border: 1px solid #003cbc;
  width: 100%;
  padding: 2rem;

  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const InfoStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StackTitle = styled.div`
  color: var(--sub1, #003cbc);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const StackBody = styled.div`
  color: var(--gray-gray1, #646464);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;

  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const TotalPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: 1px solid #c1c1c1;
  padding-top: 2rem;
  padding-bottom: 1rem;
  gap: 1rem;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StackBodyBlack = styled.div`
  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const GrayBorderBox = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #c1c1c1;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InfoTitle = styled.div`
  color: #000;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CaptionGray = styled.div`
  color: #646464;

  /* Body 3 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
`;
const CaptionBlack = styled.div`
  color: var(--black, #000);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SmallBut = styled.div`
  border-radius: 10px;
  background: #f0f0f0;
  color: #646464;

  /* Body 2 */
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;

  padding: 1rem;
`;
