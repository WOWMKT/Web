import React from 'react';
import styled from 'styled-components';

const GoodsMainView = ({ imgLink, seller, univ, performance, title }) => {
  return (
    <GoodsContainer>
      <ItemImage src={imgLink} alt="Goods Image" />
      <ItemDetails>
        <RowBox>
          <SubText>{seller}</SubText>
          <SubText>{univ}</SubText>
        </RowBox>
        <Title>{title}</Title>
        <SubText>{performance}</SubText>
      </ItemDetails>
    </GoodsContainer>
  );
};

const GoodsContainer = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

const ItemImage = styled.img`
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
  object-fit: cover;
  margin-right: 10px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubText = styled.div`
  color: var(--sub1, #003cbc);

  /* Body 1 */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
`;
const Title = styled.div`
  color: var(--main, #002472);

  /* Sub Text */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
  text-transform: capitalize;

  height: 50%;
  margin-top: 1rem;
`;

export default GoodsMainView;
