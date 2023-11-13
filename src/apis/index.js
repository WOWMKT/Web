import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://www.wowmkt.kr/',
});

axiosInstance.interceptors.request.use((config) => {
  const userAccessToken = localStorage.getItem('accessToken');
  if (userAccessToken) {
    console.log('유저토큰존재');
    config.headers['X-ACCESS-TOKEN'] = `${userAccessToken}`;
  }
  return config;
});
