import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';
import { useNavigate } from 'react-router-dom';

/**
 * EmailLogin으로 accessToken발급받기
 * @param email,password
 * @returns 
 * { 
    temporaryPw : boolean,
    grantType : String,
    jwtAccessToken : String,
    jwtRefreshToken : String,
    univ : String
    }
 */
export const usePostEmailLogin = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['emailLogin'],
    mutationFn: async ({ email, password }) => {
      const res = await axiosInstance.post(`/users/login`, {
        email: email,
        password: password,
      });

      //응답 데이터 처리
      console.log(res);
      //Token 저장
      if (res.jwtAccessToken) {
        localStorage.setItem('accessToken', res.jwtAccessToken);
        localStorage.setItem('refreshToken', res.jwtRefreshToken);
      }
      //univ데이터 저장
      if (res.univ) {
        localStorage.setItem('univ', res.univ);
      }
      // 임시 비밀번호면 resetPW로 넘기기
      if (res.temporaryPw) {
        console.log('비밀번호 재설정으로');
        alert('비밀번호를 재설정해주세요');
        navigate(`/users/resetPw?user_id=${email}`);
      } else {
        navigate(`/`);
      }

      return res.data;
    },
  });

  return {
    emailLogin: mutate,
    isPending,
    isSuccess,
    error,
  };
};
