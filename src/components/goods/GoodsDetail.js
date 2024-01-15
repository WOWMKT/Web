import React, { useEffect, useState } from 'react';
import HeartIcon from '../../assets/icon/HeartIcon';
import ShareIcon from '../../assets/icon/ShareIcon';
import CommonButton from '../common/CommonButton';
import styled from 'styled-components';
import BorderHeartIcon from '../../assets/icon/BorderHeartIcon';
import CommonModal from '../common/CommonModal';
import { useModal } from '../common/ModalContext';

const GoodsDetail = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <Wrapper>
      <GoodsImg></GoodsImg>
      <GoodsInfoBox>
        <RowBox>
          <RowBoxBar>
            <CaptionBlack>카테고리</CaptionBlack>
            <CaptionGray>OO대학교</CaptionGray>
          </RowBoxBar>
          <RowBoxBar>
            <BorderHeartIcon />
            <ShareIcon />
          </RowBoxBar>
        </RowBox>
        <Box>
          <Title>프로젝트 제목</Title>
          <CaptionGray>프로젝트 상품에 대한 간단한 설명입니다</CaptionGray>
          <CaptionGray>2023.02.10~202.5.02.23</CaptionGray>
          <RowBox>
            <Blue1Title>67% 달성</Blue1Title>
            <Blue2Title>160명 참여</Blue2Title>
            <Blue2Title>2일 남음</Blue2Title>
          </RowBox>
          <SellerName>제작 wowBear</SellerName>
        </Box>
      </GoodsInfoBox>
      <GoodsImg></GoodsImg>
      <GoodsInfoBox>
        프로젝트 상품에 대한 내용입니다. 이러한 글은 판매자가 미리 등록하는
        글로, 사진과 글을 임의로 순서를 정해 배치할 수 있습니다. 사진의 경우에는
        좌우에 마진 값이 벗지만 글의 경우에는 화면의 좌우에 여백을 두도록
        합니다.{' '}
        <CommonButton
          type={'fillBlue'}
          children={'구매하기'}
          size={'l'}
          onClick={openModal}
        />
      </GoodsInfoBox>
      <CommonModal children={<h1>호호호</h1>}></CommonModal>
    </Wrapper>
  );
};

export default GoodsDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3rem;
  padding-top: 3rem;
`;
const GoodsImg = styled.div`
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
