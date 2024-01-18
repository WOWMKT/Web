import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * 학교인증용 대학 정보 전송
 * @param univ_name, univ_email
 * @returns
 * {
    status : int,
    success : boolean,
    message : String
    }
 *
 */
export const usePostUnivInfo = () => {
  const navigate = useNavigate();

  const onErrorAlert = (errorMessage) => {
    alert(`학교인증 실패! ${errorMessage}`);
  };

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['univInfo'],
    mutationFn: async ({ univ_name, univ_email }) => {
      try {
        const res = await axiosInstance.post(`/users/univCert`, {
          univ_name: univ_name,
          univ_email: univ_email,
        });

        // 응답데이터 처리
        navigate(`/users/univCert?isCodeSent=${true}`);

        return res.data;
      } catch (error) {
        onErrorAlert('입력값을 확인하세요');
      }
    },
  });

  return {
    univInfo: mutate,
    isPending,
    isSuccess,
    error,
  };
};
