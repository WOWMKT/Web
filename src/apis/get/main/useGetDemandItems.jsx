import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';

/**
 * 수요조사 메인페이지 projectList받아오기
 * @param pageNo,orderBy,univ
 * @returns 
 * {
    univ: String,
    total_page: int,
    current_page: int,
    demand_project_list: [
            {
            demand_project_id : Long
            demand_project_name: String,
            seller_name: String,
            start_date: date,
            end_date: date,
            thumbnail: String,
            achived: int,
            goal: int
            },
            {…}
        ]
    }
 */
export const useGetDemandItems = ({ pageNo, orderBy, univ }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['demandProjectList'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/demand/home?pageNo=${pageNo}&orderBy=${orderBy}&univ=${univ}`
      );
      return res;
    },
  });

  return {
    demandProjectList: data || null,
    isLoading,
    error,
  };
};
