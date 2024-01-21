import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';

/**
 * 상세페이지 데이터 받아오기
 * @param {projectId, isOrder}
 * @returns 
 * {
”thumbnail”: “String”, //대표이미지
”category”: “String”, //카테고리
”name”: “String”, //프로젝트 이름
”univ”: “String”, //판매자의 대학교
”nickname”: “String”, //프로젝트 담당자명
”description”: “String”, //프로젝트 설명
”start_date”: “LocalDate”, //시작날짜
”end_date”: “LocalDate”, //종료날짜
”final_achievement_rate”: Long // 달성률
”participant_number”: int, //참여인원
”achieved”: int, //달성률 분자
”goal”: int //달성률 분모,
 “liked”: boolean //like 여부
}
 */
export const useGetGoodsDetail = ({ projectId, isOrder }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['goodsDetail'],
    queryFn: async () => {
      let type = 'demand_project';
      if (isOrder) {
        type = 'project';
      }
      const res = await axiosInstance.get(`/${type}/${projectId}`);
      return res;
    },
  });

  return {
    goodsDetail: data || null,
    isLoading,
    error,
  };
};
