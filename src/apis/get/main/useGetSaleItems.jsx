import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';

/**
 * 판매 메인페이지 projectList받아오기
 * @param {pageNo,orderBy,univ}
 * @returns 
 * {
    userUniv: String, //allUniv 또는 사용자의 대학교
    totalPage: int,
    currentPage: int,
    projectList: [
        {
            projectId : Long
            sellerName: String,
            projectName: String,
            endDate: LocalDateTime,
            thumbnail: String,
            achieved: int,
            goal: int
        },
        {…}
    ]
}
 */
export const useGetSaleItems = ({ pageNo, orderBy, univ }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['saleProjectList', pageNo, orderBy, univ],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/sale/home?pageNo=${pageNo}&orderBy=${orderBy}&univ=${univ}`
      );
      return res;
    },
  });

  return {
    saleProjectList: data || null,
    isLoading,
    error,
  };
};
