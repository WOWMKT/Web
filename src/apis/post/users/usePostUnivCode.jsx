import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * 학교인증용 대학 정보 전송
 * @param univ_name, univ_email,code
 * @returns
 * {
    status : int,
    success : boolean,
    message : String
    }
 *
 */
export const usePostUnivCode = () => {
  const navigate = useNavigate();

  const onErrorAlert = (errorMessage) => {
    alert(`학교인증 실패! ${errorMessage}`);
  };

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['univCert'],
    mutationFn: async ({ univ_name, univ_email, code }) => {
      try {
        const res = await axiosInstance.post(`/users/univCert/code`, {
          univ_name: univ_name,
          univ_email: univ_email,
          code: code,
        });

        // 응답데이터 처리
        alert('학교인증 성공!');
        navigate(`/`);
        localStorage.setItem('univ', univ_name);

        return res.data;
      } catch (error) {
        onErrorAlert('입력값을 확인하세요');
      }
    },
  });

  return {
    univCert: mutate,
    isPending,
    isSuccess,
    error,
  };
};
