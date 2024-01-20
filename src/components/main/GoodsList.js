// GoodsList.js
import React, { useState } from 'react';
import GoodsMainView from './GoodsMainView';

const GoodsList = ({ pageNo, orderBy, univ, isSelling }) => {
  const [goodsList, setGoodsList] = useState([
    {
      imgLink: 'urlurl',
      seller: '제작자',
      univ: '굿즈대학교',
      performance: '30%',
      title: '굿즈 제목',
    },
  ]);
  return (
    <div>
      {goodsList.map((good, index) => (
        <GoodsMainView
          key={index}
          imgLink={good.imgLink}
          seller={good.seller}
          univ={good.univ}
          performance={good.performance}
          title={good.title}
        />
      ))}
    </div>
  );
};

export default GoodsList;
