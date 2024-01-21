import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * 임시 비밀번호 발급 이메일 전달
 * @param name
 * @returns
 *
 */
export const usePostTempPw = () => {
  const navigate = useNavigate();

  const onErrorAlert = (errorMessage) => {
    alert(`임시비밀 번호 전송 실패! ${errorMessage}`);
  };

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['sendTempPw'],
    mutationFn: async ({ email }) => {
      try {
        const res = await axiosInstance.post(
          `/users/sendTempPw?email=${email}`,
          {
            email: email,
          }
        );

        // 응답데이터 처리
        alert('임시비밀 번호 발급 성공! 로그인 하세요');
        navigate('/users/login');

        return res.data;
      } catch (error) {
        onErrorAlert('입력값을 확인하세요');
      }
    },
  });

  return {
    sendTempPw: mutate,
    isPending,
    isSuccess,
    error,
  };
};
