import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * 이미지 업로드
 * @param
 * @returns
 *
 */
export const usePutImage = () => {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['uploadImage'],
    mutationFn: async ({ presignedUrl, file, fileType }) => {
      try {
        console.log(presignedUrl);
        const res = await axiosInstance.put(presignedUrl, file, {
          headers: {
            'Content-Type': fileType,
          },
        });

        // 응답데이터 처리
        console.log('Image uploaded successfully');

        return res.data;
      } catch (error) {
        console.error('Error uploading image', error);
      }
    },
  });

  return {
    uploadImage: mutate,
    isPending,
    isSuccess,
    error,
  };
};
