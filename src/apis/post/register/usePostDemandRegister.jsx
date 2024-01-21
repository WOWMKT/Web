import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * 수요 등록
 * @param 
      projectName,
      description,
      category_id,
      sellerName,
      phoneNumber,
      sellerEtc,
      item,
      questions,
      thumbnail,
      startDate,
      endDate,
      receiveType,
      receiveAddress,
      deliveryType,
      deliveryFee,
      bank,
      account,
      accountHolderName,
      nickname,
      sellToAll,
    
 * @returns
 *
 */
export const usePostDemandRegister = () => {
  const navigate = useNavigate();

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['demandRegister'],
    mutationFn: async (formData) => {
      try {
        const res = await axiosInstance.post(`/register/demand`, formData);

        // 응답데이터 처리
        alert('등록하기 성공');

        return res.data;
      } catch (error) {
        alert('등록하기 실패');
      }
    },
  });

  return {
    demandRegister: mutate,
    isPending,
    isSuccess,
    error,
  };
};
