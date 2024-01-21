import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';

/**
 * 이미지 업로드하고 url받아오기
 * @param mode(project||demand)
 * @returns
 *
 */
export const useGetImageUrl = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['imageUrl'],
    queryFn: async ({ mode }) => {
      const res = await axiosInstance.get(`/register/image?dirname='project`);
      return res;
    },
  });

  return {
    imageUrl: data || null,
    isLoading,
    error,
  };
};
