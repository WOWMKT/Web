import React, { useEffect, useState } from 'react';
import HeartIcon from '../../assets/icon/HeartIcon';
import ShareIcon from '../../assets/icon/ShareIcon';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';
import BorderHeartIcon from '../../assets/icon/BorderHeartIcon';
import CommonModal from '../common/CommonModal';
import { useModal } from '../common/ModalContext';
import OrderForm from './OrderForm';
import DemandForm from './DemandForm';
import { useGetGoodsDetail } from '../../apis/get/goods/useGetGoodsDetail';

const GoodsDetail = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  //판매vs수요조사 여부 (추후 useParams로 받기)
  const [isOrder, setIsOrder] = useState(true); //false:demand true:selling
  const [projectId, setProjectId] = useState('9');
  //data
  const [goodsData, setGoodsData] = useState({});

  //custom-hook
  const fetchedData = useGetGoodsDetail({ projectId, isOrder });

  useEffect(() => {
    if (!fetchedData.isLoading && fetchedData.goodsDetail !== null) {
      setGoodsData(fetchedData.goodsDetail);
    }
  }, [fetchedData.isLoading]);

  //data 처리
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const achievedRate = (achieved, goal) => {
    console.log(achieved, goal);
    return achieved === 0 || goal === 0
      ? '0.00'
      : ((achieved / goal) * 100).toFixed(2);
  };

  const remainingDays = (startDate, endDate) => {
    const startDateParsed = new Date(startDate);
    const endDateParsed = new Date(endDate);
    return Math.ceil((endDateParsed - startDateParsed) / (1000 * 60 * 60 * 24));
  };

  return (
    <>
      <Wrapper>
        <GoodsImg src={goodsData.thumbnail}></GoodsImg>
        <GoodsInfoBox>
          <RowBox>
            <RowBoxBar>
              <CaptionBlack>{goodsData.category}</CaptionBlack>
              <CaptionGray>{goodsData.univ}</CaptionGray>
            </RowBoxBar>
            <RowBoxBar>
              <BorderHeartIcon />
              <ShareIcon />
            </RowBoxBar>
          </RowBox>
          <Box>
            <Title>{goodsData.name}</Title>
            <CaptionGray>{goodsData.description}</CaptionGray>
            <CaptionGray>
              {formatDateString(goodsData.start_date)}~
              {formatDateString(goodsData.end_date)}
            </CaptionGray>
            <RowBox>
              <Blue1Title>
                {achievedRate(goodsData.achieved, goodsData.goal)} 달성
              </Blue1Title>
              <Blue2Title>{goodsData.participant_number}명 참여</Blue2Title>
              <Blue2Title>
                {remainingDays(goodsData.start_date, goodsData.end_date)}일 남음
              </Blue2Title>
            </RowBox>
            <SellerName>제작 {goodsData.nickname}</SellerName>
          </Box>
        </GoodsInfoBox>
        <GoodsImg src={goodsData.thumbnail}></GoodsImg>
        <GoodsInfoBox>
          {goodsData.description}
          <CommonButton
            type={'fillBlue'}
            children={'구매하기'}
            size={'l'}
            onClick={openModal}
          />
        </GoodsInfoBox>
      </Wrapper>
      {isOrder ? (
        <CommonModal children={<OrderForm />} title={'주문폼'}></CommonModal>
      ) : (
        <CommonModal children={<DemandForm />} title={'참여폼'}></CommonModal>
      )}
    </>
  );
};

export default GoodsDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3rem;
  padding-top: 3rem;
`;
const GoodsImg = styled.img`
  width: 100%;
  height: 25rem;

  background-color: gray;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  gap: 2rem;
`;
const GoodsInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 3rem;
  padding-right: 3rem;

  gap: 2rem;

  color: #646464;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const RowBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

const RowBoxBar = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  gap: 1rem;
`;
const CaptionBlack = styled.div`
  color: #646464;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const CaptionGray = styled.div`
  color: #bebebe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const Title = styled.div`
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const Blue1Title = styled.div`
  color: var(--sub2, #2969f3);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const Blue2Title = styled.div`
  color: var(--sub1, #003cbc);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const SellerName = styled.div`
  border-radius: 3rem;
  border: 1px solid var(--sub1, #003cbc);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4.8rem;

  color: var(--gray-gray1, #646464);
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 2rem;
`;
