import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * EmailLogin으로 accessToken발급받기
 * @param name, email, password, marketing_agree
 * @returns
 *
 */
export const usePostEmailJoin = () => {
  const navigate = useNavigate();

  const onErrorAlert = (errorMessage) => {
    alert(`회원가입 실패! ${errorMessage}`);
  };

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['emailSignup'],
    mutationFn: async ({ name, email, marketing_agree, password }) => {
      try {
        const res = await axiosInstance.post(`/users/join`, {
          name: name,
          marketing_agree: marketing_agree,
          email: email,
          password: password,
        });

        // 응답데이터 처리
        navigate('/users/login');

        return res.data;
      } catch (error) {
        onErrorAlert('입력값을 확인하세요');
      }
    },
  });

  return {
    emailSignup: mutate,
    isPending,
    isSuccess,
    error,
  };
};
