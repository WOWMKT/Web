import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../..';

/**
 * KakaoLogin
 * @param code
 * @returns 
 * { 
    temporaryPw : boolean,
    grantType : String,
    jwtAccessToken : String,
    jwtRefreshToken : String,
    univ : String
    }   
 */
export const usePostKakaoLogin = ({ code }) => {
  const {
    mutate,
    data = {},
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['kakaoLogin'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/kakao/login?code=${code}`, data);

      //응답데이터 처리
      if (res.status === 201) {
        alert('로그인 성공!');
      } else {
        alert('오류');
      }

      return res.data;
    },
  });

  return {
    kakaoLogin: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
