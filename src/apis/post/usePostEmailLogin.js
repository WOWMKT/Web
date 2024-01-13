import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

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
export const usePostIdToken = ({ email, password }) => {
  const {
    mutate,
    data = { email: email, password: password },
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ['emailLogin'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/users/login`, data);
      return res.data;
    },
  });

  return {
    emailLogin: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
