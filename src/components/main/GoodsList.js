// GoodsList.js
import React, { useEffect, useState } from 'react';
import GoodsMainView from './GoodsMainView';
import { useGetImageUrl } from '../../apis/get/register/useGetImageUrl';
import { useGetSaleItems } from '../../apis/get/main/useGetSaleItems';
import { useGetDemandItems } from '../../apis/get/main/useGetDemandItems';

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

  //custom-hook
  const fetchedSaleList = useGetSaleItems({ pageNo, orderBy, univ });
  const fetchedDemandList = useGetDemandItems({ pageNo, orderBy, univ });

  useEffect(() => {
    if (
      !fetchedSaleList.isLoading &&
      isSelling &&
      fetchedSaleList.saleProjectList !== null
    ) {
      setGoodsList(fetchedSaleList.saleProjectList.projectList);
    }
  }, [fetchedSaleList.isLoading]);
  useEffect(() => {
    if (
      !fetchedDemandList.isLoading &&
      !isSelling &&
      fetchedDemandList.demandProjectList !== null
    ) {
      setGoodsList(fetchedDemandList.demandProjectList.projectList);
    }
  }, [fetchedDemandList.isLoading]);

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
