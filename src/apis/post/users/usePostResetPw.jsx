import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * 비밀번호 재설정
 * @param email, password
 * @returns
 *
 */
export const usePostResetPw = () => {
  const navigate = useNavigate();

  const onErrorAlert = (errorMessage) => {
    alert(`비밀번호 재설정 실패! ${errorMessage}`);
  };

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['resetPw'],
    mutationFn: async ({ email, password }) => {
      try {
        const res = await axiosInstance.post(`/users/resetPw`, {
          email: email,
          password: password,
        });

        // 응답데이터 처리
        alert('비밀번호 재설정 성공! 로그인 하세요');
        navigate('/users/login');

        return res.data;
      } catch (error) {
        onErrorAlert('입력값을 확인하세요');
      }
    },
  });

  return {
    resetPw: mutate,
    isPending,
    isSuccess,
    error,
  };
};
