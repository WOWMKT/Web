import React from 'react';
import styled from 'styled-components';

const GoodsMainView = ({ imgLink, seller, univ, performance }) => {
  return (
    <GoodsContainer>
      <ItemImage src={imgLink} alt="Goods Image" />
      <ItemDetails>
        <div>{seller}</div>
        <div>{univ}</div>
        <div>{performance}</div>
      </ItemDetails>
    </GoodsContainer>
  );
};

const GoodsContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
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

  div {
    margin-bottom: 5px;
  }
`;

export default GoodsMainView;
