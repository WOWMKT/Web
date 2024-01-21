import React, { useEffect } from 'react';
import BackTopBar from '../common/BackTopBar';
import OrderItem from './OrderItem';
import CommonInput from '../common/CommonInput';
import styled from 'styled-components';

const OrderDetail = ({ isSeller = true, isOrderForm = false }) => {
  //default:/myinfo/orderdetail 주문상세 페이지
  // isOrderForm: /goods/detail 주문폼 모달

  const dummyData = {
    date: '2023.10.14',
    state: '확인 중',
    filter: '판매',
    title: '00대학교',
    subTitle: '와움이 인형 프로젝트',
    price: '25,000',
  };
  return (
    <Wrapper>
      {!isOrderForm && <BackTopBar children={'주문상세'} />}

      <OrderBody isOrderForm={isOrderForm}>
        {!isOrderForm && (
          <>
            <OrderHeader>
              <ColumnBox>
                <CaptionGray>no.123124124</CaptionGray>
                <CaptionBlack>2023.01.19</CaptionBlack>
              </ColumnBox>

              {!isSeller && <SmallBut>주문 취소하기</SmallBut>}
              {isSeller && <SmallBut>임의 주문 취소</SmallBut>}
              {isSeller && <SmallBut>주문 취소 수락</SmallBut>}
            </OrderHeader>
            <OrderItem order={dummyData} isDateShow={false} />
          </>
        )}

        <ColumnBox>
          <SubTitle>수령 방법</SubTitle>
          <PriceInfoBox>
            <InfoStack>
              <StackTitle>택배배송</StackTitle>
              <StackBody>택배비 3,000원</StackBody>
            </InfoStack>
          </PriceInfoBox>

          <SubTitle>주문 정보</SubTitle>
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

          <TotalPriceInfo>
            <RowBox>
              <StackBody>총 상품 금액</StackBody>
              <StackBodyBlack>11,000원</StackBodyBlack>
            </RowBox>
            <RowBox>
              <StackBody>배송비</StackBody>
              <StackBodyBlack>3,000원</StackBodyBlack>
            </RowBox>
          </TotalPriceInfo>
          <TotalPriceInfo>
            <RowBox>
              <StackBody>최종 금액</StackBody>
              <StackBodyBlack>14,000원</StackBodyBlack>
            </RowBox>
          </TotalPriceInfo>
        </ColumnBox>
        <ColumnBoxMargin>
          <SubTitle>배송 정보</SubTitle>
          <GrayBorderBox>
            <RowBox>
              <InfoTitle>수취인명</InfoTitle>
              <CommonInput
                size="s"
                type="off"
                width="40%"
                placeholder="이은비"
              />
            </RowBox>
            <RowBox>
              <InfoTitle>우편번호</InfoTitle>
              <CommonInput size="s" type="off" width="40%" placeholder="1441" />
            </RowBox>
            <RowBox>
              <InfoTitle>우편번호</InfoTitle>
              <CommonInput size="s" type="off" width="40%" placeholder="1441" />
            </RowBox>
            <RowBox>
              <InfoTitle>주소</InfoTitle>
              <CommonInput
                size="s"
                type="off"
                width="70%"
                placeholder="경기도 안양시 만안구 안양천서로177"
              />
            </RowBox>
            <RowBox>
              <InfoTitle>상세주소</InfoTitle>
              <CommonInput
                size="s"
                type="off"
                width="70%"
                placeholder="117-905"
              />
            </RowBox>
            <RowBox>
              <InfoTitle>전화번호</InfoTitle>
              <CommonInput
                size="s"
                type="off"
                width="70%"
                placeholder="010-7463-6262"
              />
            </RowBox>
            <RowBox>
              <InfoTitle>배송메세지</InfoTitle>
              <CommonInput
                size="s"
                type="off"
                width="70%"
                placeholder="집에 가고 싶다~"
              />
            </RowBox>
          </GrayBorderBox>
        </ColumnBoxMargin>
        <ColumnBox>
          <SubTitle>판매자 계좌 정보</SubTitle>
          <GrayBorderBox>
            <RowBox>
              <InfoTitle>입금계좌</InfoTitle>
              <InfoTitle>KB국민 012345566</InfoTitle>
            </RowBox>
            <RowBox>
              <InfoTitle>예금주</InfoTitle>
              <InfoTitle>김판매</InfoTitle>
            </RowBox>
          </GrayBorderBox>
        </ColumnBox>
        <ColumnBoxFooter>
          <SubTitle>입금 정보</SubTitle>
          <GrayBorderBox>
            <RowBox>
              <InfoTitle>입금자명</InfoTitle>
              <CommonInput
                size="s"
                type="off"
                width="30%"
                placeholder="김구매"
              />
            </RowBox>
            <RowBox>
              <InfoTitle>입금시간</InfoTitle>
              <CommonInput
                size="s"
                type="off"
                width="30%"
                placeholder="오후 12:59"
              />
            </RowBox>
          </GrayBorderBox>

          <RowBox>
            <InfoTitle>환불계좌</InfoTitle>
            <CommonInput
              size="s"
              type="off"
              width="30%"
              placeholder="KB국민은행"
            />
            <CommonInput
              size="s"
              type="off"
              width="30%"
              placeholder="010101010"
            />
          </RowBox>
        </ColumnBoxFooter>
      </OrderBody>
    </Wrapper>
  );
};

export default OrderDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderBody = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 3rem;
  gap: 3rem;

  height: 100%;

  ${({ isOrderForm }) =>
    !isOrderForm &&
    `
    padding-left: 3rem;
    padding-right: 3rem;
  `}
`;

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
