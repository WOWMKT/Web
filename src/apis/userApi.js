import { useEffect } from 'react';
import axiosInstance from './index';

export const usePostEmailLogin = async ({ id, pw }) => {
  let body = {
    email: id,
    password: pw,
  };
  console.log(`로그인데이터:${id},${pw}`);
  const { data } = await axiosInstance.post(`users/login`, body);

  return data;
};
